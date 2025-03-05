import { useState, useEffect } from 'react';
import { useFipe } from '../../../contexts/FipeContext';
import { Brand, Model, Year } from '@/services/fipe/fipe.model';
import { fipeService } from '@/services/fipe/fipe.request';

export function useFipeData() {
  const { brand, model, year, setBrand, setModel, setYear } = useFipe();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [years, setYears] = useState<Year[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('Fetching brands...');
        const data = await fipeService.getBrands();
        console.log('Brands fetched successfully:', data);
        setBrands(data);
      } catch (error) {
        console.error('Error in fetchBrands:', error);
        setError(error instanceof Error ? error.message : 'Erro ao carregar marcas');
      } finally {
        setIsLoading(false);
      }
    };
    fetchBrands();
  }, []);

  useEffect(() => {
    if (brand) {
      const fetchModels = async () => {
        try {
          setIsLoading(true);
          setError(null);
          const data = await fipeService.getModels(brand);
          setModels(data.modelos);
          setModel('');
          setYear('');
        } catch (error) {
          console.error('Error fetching models:', error);
          setError('Erro ao carregar os modelos. Por favor, tente novamente mais tarde.');
        } finally {
          setIsLoading(false);
        }
      };
      fetchModels();
    } else {
      setModels([]);
      setModel('');
      setYear('');
    }
  }, [brand, setModel, setYear]);

  useEffect(() => {
    if (brand && model) {
      const fetchYears = async () => {
        try {
          setIsLoading(true);
          setError(null);
          const data = await fipeService.getYears(brand, parseInt(model, 10));
          setYears(data);
          setYear('');
        } catch (error) {
          console.error('Error fetching years:', error);
          setError('Erro ao carregar os anos. Por favor, tente novamente mais tarde.');
        } finally {
          setIsLoading(false);
        }
      };
      fetchYears();
    } else {
      setYears([]);
      setYear('');
    }
  }, [brand, model, setYear]);

  return {
    brands,
    models,
    years,
    isLoading,
    error,
    brand,
    model,
    year,
    setBrand,
    setModel,
    setYear
  };
} 