export interface Brand {
  codigo: string;
  nome: string;
}

export interface Model {
  codigo: string;
  nome: string;
}

export interface Year {
  codigo: string;
  nome: string;
}

export interface VehicleValue {
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  TipoVeiculo: number;
  SiglaCombustivel: string;
  DataConsulta: string;
}

export interface IGetBrandsOutput {
  brands: Brand[];
}

export interface IGetModelsInput {
  brandCode: string;
}

export interface IGetModelsOutput {
  modelos: Model[];
}

export interface IGetYearsInput {
  brandCode: string;
  modelCode: number;
}

export interface IGetYearsOutput {
  years: Year[];
}

export interface IGetVehicleValueInput {
  brandCode: string;
  modelCode: number;
  yearCode: string;
}

export interface IGetVehicleValueOutput {
  vehicleValue: VehicleValue;
} 