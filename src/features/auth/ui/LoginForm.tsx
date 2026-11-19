import { useState, type FormEvent } from 'react';
import { routes } from '@/shared/config/routes';
import { Button, LinkButton, TextField } from '@/shared/ui';
import { login } from '../api/auth';
import { validateEmail, validatePassword } from '../model/validation';
import styles from './AuthForm.module.css';
import { useAuthSubmit } from './useAuthSubmit';

interface Errors {
  email?: string;
  password?: string;
}

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const { submitting, formError, submit } = useAuthSubmit();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // При входе проверяем только заполненность пароля: правила длины действуют при регистрации.
    const nextErrors: Errors = {
      email: validateEmail(email),
      password: password ? undefined : validatePassword(password),
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    void submit(() => login({ email: email.trim(), password }));
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fields}>
        <TextField
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={errors.email}
        />
        <TextField
          label="Пароль"
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={errors.password}
        />
      </div>

      {formError && (
        <p className={styles.formError} role="alert">
          {formError}
        </p>
      )}

      <div className={styles.actions}>
        <Button type="submit" variant="accent" className={styles.action} disabled={submitting}>
          Войти
        </Button>
        <LinkButton
          to={routes.register}
          variant="secondary"
          className={`${styles.action} ${styles.secondaryAction}`}
        >
          Регистрация
        </LinkButton>
      </div>
    </form>
  );
}
