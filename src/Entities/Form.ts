import { ChangeEvent, InputHTMLAttributes } from 'react';

export interface SelectProps {
  title: string;
  name: string;
  labelTitle?: string;
  options?: string[];
  error?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  title: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ChartProps {
  xLabel: string;
  yLabel: string;
  xKey: string;
  yKey: string;
  data: Record<string, unknown>[];
}

export type Risk = 'conservative' | 'moderate' | 'aggressive' | '';

export interface UseFormState {
  initialDeposit: string;
  monthlyContribution: string;
  retiredAge: string;
  currentAge: string;
  riskLevel: Risk;
}

export interface ErrorState {
  retiredAge: string;
  currentAge: string;
  riskLevel: string;
}
