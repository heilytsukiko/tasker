import styles from './StepCard.module.css';

interface StepCardProps {
  title: string;
  description: string;
}

/** Карточка шага для списка <ol>. */
export function StepCard({ title, description }: StepCardProps) {
  return (
    <li className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </li>
  );
}
