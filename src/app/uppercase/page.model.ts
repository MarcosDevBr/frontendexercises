export interface IExample {
  input: string;
  result: boolean;
}

export interface IUppercasePageView {
  input: string;
  isUppercase: boolean;
  examples: IExample[];
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} 