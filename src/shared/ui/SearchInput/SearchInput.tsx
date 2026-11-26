import type { InputHTMLAttributes } from 'react';
import { cn } from '@/shared/lib/cn';
import styles from './SearchInput.module.css';

export interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'aria-label'> {
  /** Видимой подписи у поля нет, поэтому название для скринридеров обязательно. */
  'aria-label': string;
}

export function SearchInput({ className, ...rest }: SearchInputProps) {
  return <input type="search" className={cn(styles.input, className)} {...rest} />;
}
