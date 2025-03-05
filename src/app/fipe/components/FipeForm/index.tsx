'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFipe } from '@/contexts/FipeContext';
import { FipeFormView } from './FipeForm.view';
import { fipeService } from '@/services/fipe/fipe.request';
import { Brand, Model, Year } from '@/services/fipe/fipe.model';

export default function FipeForm() {
  const router = useRouter();
  const { setBrand, setModel, setYear } = useFipe();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [years, setYears] = useState<Year[]>([]);
  const [brand, setSelectedBrand] = useState('');
  const [model, setSelectedModel] = useState('');
  const [year, setSelectedYear] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const data = await fipeService.getBrands();
        setBrands(data);
      } catch (error) {
        console.error('Error fetching brands:', error);
        setError('Erro ao carregar as marcas. Por favor, tente novamente mais tarde.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchModels = async () => {
      if (!brand) {
        setModels([]);
        setSelectedModel('');
        return;
      }

      try {
        setIsLoading(true);
        const response = await fipeService.getModels(brand);
        setModels(response.modelos);
        setSelectedModel('');
      } catch (error) {
        console.error('Error fetching models:', error);
        setError('Erro ao carregar os modelos. Por favor, tente novamente mais tarde.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchModels();
  }, [brand]);

  useEffect(() => {
    const fetchYears = async () => {
      if (!model) {
        setYears([]);
        setSelectedYear('');
        return;
      }

      try {
        setIsLoading(true);
        const data = await fipeService.getYears(brand, parseInt(model, 10));
        setYears(data);
        setSelectedYear('');
      } catch (error) {
        console.error('Error fetching years:', error);
        setError('Erro ao carregar os anos. Por favor, tente novamente mais tarde.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchYears();
  }, [brand, model]);

  const handleSubmit = () => {
    if (brand && model && year) {
      setBrand(brand);
      setModel(model);
      setYear(year);
      router.push('/fipe/result');
    }
  };

  return (
    <FipeFormView
      brands={brands}
      models={models}
      years={years}
      brand={brand}
      model={model}
      year={year}
      isLoading={isLoading}
      error={error}
      onBrandChange={setSelectedBrand}
      onModelChange={setSelectedModel}
      onYearChange={setSelectedYear}
      onSubmit={handleSubmit}
    />
  );
} 