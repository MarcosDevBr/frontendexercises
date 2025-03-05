import { Brand, Model, Year } from '@/services/fipe/fipe.model';

export interface IFipeFormView {
  brands: Brand[];
  models: Model[];
  years: Year[];
  brand: string;
  model: string;
  year: string;
  isLoading: boolean;
  error: string | null;
  onBrandChange: (brand: string) => void;
  onModelChange: (model: string) => void;
  onYearChange: (year: string) => void;
  onSubmit: () => void;
} 