import { useId, useState, type KeyboardEvent } from 'react';
import { registerRoleLabels, type RegisterRole } from '../../model/validation';
import styles from './RoleSelect.module.css';

interface RoleSelectProps {
  value: RegisterRole | null;
  onChange: (role: RegisterRole) => void;
  error?: string;
}

const roles = Object.keys(registerRoleLabels) as RegisterRole[];

export function RoleSelect({ value, onChange, error }: RoleSelectProps) {
  const [open, setOpen] = useState(false);
  const listId = useId();

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') setOpen(false);
  }

  function choose(role: RegisterRole) {
    onChange(role);
    setOpen(false);
  }

  return (
    <div className={styles.root} onKeyDown={handleKeyDown}>
      <button
        type="button"
        className={styles.toggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-invalid={error ? true : undefined}
        onClick={() => setOpen((current) => !current)}
      >
        {value ? registerRoleLabels[value] : 'Выберите роль'}
      </button>

      {open && (
        <ul id={listId} className={styles.list} role="listbox" aria-label="Роль">
          {roles.map((role) => (
            <li key={role} role="none">
              <button
                type="button"
                role="option"
                aria-selected={role === value}
                className={styles.option}
                onClick={() => choose(role)}
              >
                {registerRoleLabels[role]}
              </button>
            </li>
          ))}
        </ul>
      )}

      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
