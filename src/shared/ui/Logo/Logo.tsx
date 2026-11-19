import { Link } from 'react-router-dom';
import { routes } from '@/shared/config/routes';
import styles from './Logo.module.css';

export function Logo() {
  return (
    <Link to={routes.home} className={styles.logo} aria-label="Tasker — на главную">
      <span className={styles.mark} aria-hidden="true">
        T
      </span>
      <span className={styles.text}>Tasker</span>
    </Link>
  );
}
