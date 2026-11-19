import type { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import { buttonClassName, type ButtonStyleProps } from './buttonClassName';

export interface LinkButtonProps
  extends ComponentProps<typeof Link>,
    Omit<ButtonStyleProps, 'className'> {}

/** Ссылка внутри приложения, выглядящая как кнопка. */
export function LinkButton({ variant, size, fullWidth, className, ...rest }: LinkButtonProps) {
  return <Link className={buttonClassName({ variant, size, fullWidth, className })} {...rest} />;
}
