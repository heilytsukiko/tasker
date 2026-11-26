import { routes } from '@/shared/config/routes';
import { Chip, LinkButton } from '@/shared/ui';
import { getPromotionFormat, promotionFormatLabels } from '../../model/format';
import type { PromotionPreview } from '../../model/types';
import styles from './PromotionCard.module.css';

interface PromotionCardProps {
  promotion: PromotionPreview;
}

export function PromotionCard({ promotion }: PromotionCardProps) {
  const { id, address, companyName, title, description, reward } = promotion;
  // Офлайн-задание показывает адрес, онлайн — метку «Онлайн», чтобы карточки были одной высоты.
  const placeLabel = address?.trim() || promotionFormatLabels[getPromotionFormat(promotion)];

  return (
    <article className={styles.card}>
      <Chip variant="neutral" className={styles.address}>
        {placeLabel}
      </Chip>

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
