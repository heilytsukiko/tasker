import type { UserRole } from '@/shared/api';

/** Роли, доступные при самостоятельной регистрации (админа создаём вручную). */
export type RegisterRole = Extract<UserRole, 'user' | 'company'>;

export const registerRoleLabels: Record<RegisterRole, string> = {
  user: 'Участник',
  company: 'Компания',
};

export const PASSWORD_MIN_LENGTH = 8;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email: string): string | undefined {
  const value = email.trim();
  if (!value) return 'Введите email';
  if (!EMAIL_PATTERN.test(value)) return 'Введите email в формате name@example.com';
  return undefined;
}

export function validatePassword(password: string): string | undefined {
  if (!password) return 'Введите пароль';
  if (password.length < PASSWORD_MIN_LENGTH) {
    return `Пароль должен быть не короче ${PASSWORD_MIN_LENGTH} символов`;
  }
  return undefined;
}

export function validatePasswordRepeat(password: string, repeat: string): string | undefined {
  if (!repeat) return 'Повторите пароль';
  if (password !== repeat) return 'Пароли не совпадают';
  return undefined;
}

export function validateRole(role: RegisterRole | null): string | undefined {
  return role ? undefined : 'Выберите роль';
}
