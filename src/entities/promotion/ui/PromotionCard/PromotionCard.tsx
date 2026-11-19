import { routes } from '@/shared/config/routes';
import { Chip, LinkButton } from '@/shared/ui';
import type { PromotionPreview } from '../../model/types';
import styles from './PromotionCard.module.css';

interface PromotionCardProps {
  promotion: PromotionPreview;
}

export function PromotionCard({ promotion }: PromotionCardProps) {
  const { id, address, companyName, title, description, reward } = promotion;

  return (
    <article className={styles.card}>
      {address && (
        <Chip variant="neutral" className={styles.address}>
          {address}
        </Chip>
      )}

      <div className={styles.body}>
        <p className={styles.company}>{companyName}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <Chip variant="primary" className={styles.reward}>
        Награда: {reward}
      </Chip>

      <LinkButton to={routes.promotion(id)} variant="accent" size="md" fullWidth>
        Подробнее
      </LinkButton>
    </article>
  );
}
