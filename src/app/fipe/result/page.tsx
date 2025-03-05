'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFipe } from '../../../contexts/FipeContext';
import { ResultPageView } from './page.view';
import { fipeService } from '@/services/fipe/fipe.request';

export default function ResultPage() {
  const router = useRouter();
  const { brand, model, year, vehicleValue, setVehicleValue } = useFipe();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!brand || !model || !year) {
      router.push('/fipe');
      return;
    }

    const fetchValue = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const modelId = parseInt(model, 10);
        const data = await fipeService.getVehicleValue(brand, modelId, year);
        setVehicleValue(data);
      } catch (error) {
        console.error('Error fetching vehicle value:', error);
        setError('Erro ao buscar o valor do veículo. Por favor, tente novamente.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchValue();
  }, [brand, model, year, router, setVehicleValue]);

  if (!vehicleValue) {
    router.push('/fipe');
    return null;
  }

  return (
    <ResultPageView
      isLoading={isLoading}
      error={error}
      vehicleValue={vehicleValue}
      onBack={() => router.push('/fipe')}
    />
  );
}