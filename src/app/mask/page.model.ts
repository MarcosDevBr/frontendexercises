export interface IMaskPageView {
  input: string;
  maskedValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} 