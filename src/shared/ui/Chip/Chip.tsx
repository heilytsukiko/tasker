import type { HTMLAttributes } from 'react';
import { cn } from '@/shared/lib/cn';
import styles from './Chip.module.css';

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  /** neutral — тёмный текст, primary — фиолетовый (акцентные метки: награда, статус). */
  variant?: 'neutral' | 'primary';
}

/** Пилюля-метка. Размер и шрифт задаёт потребитель через className. */
export function Chip({ variant = 'neutral', className, ...rest }: ChipProps) {
  return <span className={cn(styles.chip, styles[variant], className)} {...rest} />;
}
