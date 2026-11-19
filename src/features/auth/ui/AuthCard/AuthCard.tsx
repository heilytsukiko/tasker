import type { ReactNode } from 'react';
import styles from './AuthCard.module.css';

interface AuthCardProps {
  title: string;
  children: ReactNode;
}

export function AuthCard({ title, children }: AuthCardProps) {
  return (
    <section className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
}
