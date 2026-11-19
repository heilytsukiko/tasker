import { PromotionCard } from '@/entities/promotion';
import { landingAnchors } from '@/shared/config/routes';
import { Container } from '@/shared/ui/Container';
import { mockPromotions } from '../../model/mock';
import styles from './CatalogPreview.module.css';

export function CatalogPreview() {
  return (
    <section id={landingAnchors.promotions} className={styles.section}>
      <Container>
        <h2 className={styles.title}>Свежие акции и челленджи</h2>
        <div className={styles.grid}>
          {mockPromotions.map((promotion) => (
            <PromotionCard key={promotion.id} promotion={promotion} />
          ))}
        </div>
      </Container>
    </section>
  );
}
