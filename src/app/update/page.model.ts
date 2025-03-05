/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IExample {
  current: Record<string, any>;
  update: Record<string, any>;
  result: Record<string, any>;
}

export interface IUpdatePageView {
  currentObject: string;
  newData: string;
  result: string;
  examples: IExample[];
  onCurrentObjectChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onNewDataChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onUpdate: () => void;
} 