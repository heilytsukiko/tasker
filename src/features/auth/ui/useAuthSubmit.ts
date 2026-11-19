import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiError, tokenStorage } from '@/shared/api';
import { routes } from '@/shared/config/routes';
import type { AuthResponse } from '../api/auth';

/** Общая логика отправки формы входа/регистрации: токен, переход, текст ошибки. */
export function useAuthSubmit() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string>();

  async function submit(action: () => Promise<AuthResponse>) {
    setSubmitting(true);
    setFormError(undefined);
    try {
      const { token } = await action();
      tokenStorage.set(token);
      // Кабинеты появятся в спринте 3 — пока ведём на главную.
      navigate(routes.home);
    } catch (error) {
      setFormError(
        error instanceof ApiError ? error.message : 'Не удалось выполнить запрос. Попробуйте позже.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  return { submitting, formError, submit };
}
