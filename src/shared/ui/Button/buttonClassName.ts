import { cn } from '@/shared/lib/cn';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'dark';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

/** Общие классы для <Button> и <LinkButton>, чтобы выглядели одинаково. */
export function buttonClassName({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
}: ButtonStyleProps): string {
  return cn(styles.button, styles[variant], styles[size], fullWidth && styles.fullWidth, className);
}
