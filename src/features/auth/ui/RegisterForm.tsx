import { useState, type FormEvent } from 'react';
import { routes } from '@/shared/config/routes';
import { Button, LinkButton, TextField } from '@/shared/ui';
import { register } from '../api/auth';
import {
  validateEmail,
  validatePassword,
  validatePasswordRepeat,
  validateRole,
  type RegisterRole,
} from '../model/validation';
import styles from './AuthForm.module.css';
import { RoleSelect } from './RoleSelect/RoleSelect';
import { useAuthSubmit } from './useAuthSubmit';

interface Errors {
  email?: string;
  password?: string;
  passwordRepeat?: string;
  role?: string;
}

export function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [role, setRole] = useState<RegisterRole | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const { submitting, formError, submit } = useAuthSubmit();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Errors = {
      email: validateEmail(email),
      password: validatePassword(password),
      passwordRepeat: validatePasswordRepeat(password, passwordRepeat),
      role: validateRole(role),
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean) || !role) return;

    void submit(() => register({ email: email.trim(), password, role }));
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
          autoComplete="new-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={errors.password}
        />
        <TextField
          label="Повторите пароль"
          type="password"
          name="passwordRepeat"
          autoComplete="new-password"
          value={passwordRepeat}
          onChange={(event) => setPasswordRepeat(event.target.value)}
          error={errors.passwordRepeat}
        />
        <RoleSelect value={role} onChange={setRole} error={errors.role} />
      </div>

      {formError && (
        <p className={styles.formError} role="alert">
          {formError}
        </p>
      )}

      <div className={styles.actions}>
        <Button type="submit" variant="accent" className={styles.action} disabled={submitting}>
          Регистрация
        </Button>
        <LinkButton
          to={routes.login}
          variant="secondary"
          className={`${styles.action} ${styles.secondaryAction}`}
        >
          Войти
        </LinkButton>
      </div>
    </form>
  );
}
