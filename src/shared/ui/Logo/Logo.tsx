import { Link } from 'react-router-dom';
import { routes } from '@/shared/config/routes';
import { findAsset } from '@/shared/lib/assets';
import styles from './Logo.module.css';

const markSrc = findAsset('logo-mark');

export function Logo() {
  return (
    <Link to={routes.home} className={styles.logo} aria-label="Tasker — на главную">
      {markSrc ? (
        <img className={styles.markImage} src={markSrc} width={32} height={32} alt="" />
      ) : (
        // Запасной знак, пока в src/assets нет файла logo-mark
        <span className={styles.mark} aria-hidden="true">
          T
        </span>
      )}
      <span className={styles.text}>Tasker</span>
    </Link>
  );
}
