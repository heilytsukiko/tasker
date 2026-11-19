import { Outlet } from 'react-router-dom';
import { findAsset } from '@/shared/lib/assets';
import styles from './AuthLayout.module.css';

const background = findAsset('auth-background');

/** Страницы без шапки и подвала: карточка по центру на фоне с волнами. */
export function AuthLayout() {
  return (
    <main
      className={styles.page}
      style={background ? { backgroundImage: `url(${background})` } : undefined}
    >
      <Outlet />
    </main>
  );
}
