import type { ButtonHTMLAttributes } from 'react';
import { buttonClassName, type ButtonStyleProps } from './buttonClassName';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<ButtonStyleProps, 'className'> {}

export function Button({
  variant,
  size,
  fullWidth,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClassName({ variant, size, fullWidth, className })}
      {...rest}
    />
  );
}
