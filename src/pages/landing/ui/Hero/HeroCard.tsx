import { routes } from '@/shared/config/routes';
import { Chip, LinkButton, StarRating } from '@/shared/ui';
import styles from './HeroCard.module.css';

interface HeroCardProps {
  /** Фото челленджа. Пока ассеты из Figma не выгружены — показывается градиент-заглушка. */
  imageSrc?: string;
  /** Аватар компании. */
  avatarSrc?: string;
}

export function HeroCard({ imageSrc, avatarSrc }: HeroCardProps) {
  return (
    <div className={styles.wrap}>
      <article className={styles.card}>
        <div className={styles.header}>
          {avatarSrc ? (
            <img className={styles.avatar} src={avatarSrc} alt="" />
          ) : (
            <span className={styles.avatar} aria-hidden="true" />
          )}
          <div className={styles.headings}>
            <h2 className={styles.name}>Coffee boom</h2>
            <p className={styles.meta}>Челлендж · 7 дней</p>
          </div>
        </div>

        {imageSrc ? (
          <img className={styles.image} src={imageSrc} alt="Чашка кофе" />
        ) : (
          <div className={styles.image} role="img" aria-label="Фото челленджа" />
        )}

        <Chip variant="primary" className={styles.reward}>
          Награда: латте в подарок
        </Chip>

        <p className={styles.note}>Отзыв с фото подтверждает участие</p>

        <div className={styles.rating}>
          <StarRating value={5} />
          <span>4,8 рейтинг компании</span>
        </div>

        <LinkButton to={routes.promotions} variant="primary" size="md" fullWidth className={styles.cta}>
          Перейти к условиям
        </LinkButton>
      </article>
    </div>
  );
}
