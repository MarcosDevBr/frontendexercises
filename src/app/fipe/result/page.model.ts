import { VehicleValue } from "@/services/fipe/fipe.model";

export interface IResultPageView {
  isLoading: boolean;
  error: string | null;
  vehicleValue: VehicleValue | null;
  onBack: () => void;
} 