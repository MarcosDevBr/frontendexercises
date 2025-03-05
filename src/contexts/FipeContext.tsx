/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface FipeContextType {
  brand: string;
  model: string;
  year: string;
  vehicleValue: any;
  setBrand: (brand: string) => void;
  setModel: (model: string) => void;
  setYear: (year: string) => void;
  setVehicleValue: (value: any) => void;
  clearSelections: () => void;
}

const FipeContext = createContext<FipeContextType | undefined>(undefined);

export function FipeProvider({ children }: { children: ReactNode }) {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [vehicleValue, setVehicleValue] = useState(null);

  const clearSelections = () => {
    setBrand('');
    setModel('');
    setYear('');
    setVehicleValue(null);
  };

  return (
    <FipeContext.Provider value={{ 
      brand, 
      model, 
      year,
      vehicleValue,
      setBrand, 
      setModel, 
      setYear,
      setVehicleValue,
      clearSelections 
    }}>
      {children}
    </FipeContext.Provider>
  );
}

export function useFipe() {
  const context = useContext(FipeContext);
  if (context === undefined) {
    throw new Error('useFipe must be used within a FipeProvider');
  }
  return context;
}