import {
  Brand,
  Model,
  Year,
  VehicleValue,
} from './fipe.model';

const BASE_URL = 'https://parallelum.com.br/fipe/api/v1/carros';
const TOKEN = process.env.NEXT_PUBLIC_FIPE_TOKEN || '';

const getHeaders = () => ({
  'Accept': 'application/json',
  'X-Subscription-Token': TOKEN
});

export const fipeService = {
  getBrands: async (): Promise<Brand[]> => {
    try {
      const response = await fetch(`${BASE_URL}/marcas`, {
        method: 'GET',
        headers: getHeaders()
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Invalid response format');
      }
      return data;
    } catch (error) {
      console.error('Error in getBrands:', error);
      throw new Error('Failed to fetch brands. Please try again later.');
    }
  },

  getModels: async (brandId: string): Promise<{ modelos: Model[] }> => {
    const response = await fetch(`${BASE_URL}/marcas/${brandId}/modelos`, {
      method: 'GET',
      headers: getHeaders()
    });
    if (!response.ok) {
      throw new Error('Failed to fetch models');
    }
    return response.json();
  },

  getYears: async (brandId: string, modelId: number): Promise<Year[]> => {
    const response = await fetch(`${BASE_URL}/marcas/${brandId}/modelos/${modelId}/anos`, {
      method: 'GET',
      headers: getHeaders()
    });
    if (!response.ok) {
      throw new Error('Failed to fetch years');
    }
    return response.json();
  },

  getVehicleValue: async (brandId: string, modelId: number, yearId: string): Promise<VehicleValue> => {
    const response = await fetch(`${BASE_URL}/marcas/${brandId}/modelos/${modelId}/anos/${yearId}`, {
      method: 'GET',
      headers: getHeaders()
    });
    if (!response.ok) {
      throw new Error('Failed to fetch vehicle value');
    }
    return response.json();
  }
};