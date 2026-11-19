import { cn } from '@/shared/lib/cn';
import styles from './StarRating.module.css';

interface StarRatingProps {
  /** Оценка от 0 до 5. */
  value: number;
  /** Размер одной звезды в px. */
  size?: number;
  className?: string;
}

const STAR_PATH = 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

// TODO: заменить на SVG звёзд из Figma, когда ассеты будут экспортированы.
export function StarRating({ value, size = 14, className }: StarRatingProps) {
  const filledCount = Math.round(Math.min(5, Math.max(0, value)));
  const label = `Оценка ${value.toLocaleString('ru-RU')} из 5`;

  return (
    <span className={cn(styles.stars, className)} role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={cn(styles.star, index < filledCount ? styles.filled : styles.empty)}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </span>
  );
}
