import { routes } from '@/shared/config/routes';
import { findAsset } from '@/shared/lib/assets';
import { Chip, LinkButton } from '@/shared/ui';
import { Container } from '@/shared/ui/Container';
import styles from './Hero.module.css';
import { HeroCard } from './HeroCard';

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <Chip variant="primary" className={styles.label}>
            Платформа акций и челленджей
          </Chip>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>Находите акции.</span>
            <span className={styles.titleLine}>Проходите челленджи.</span>
            <span className={`${styles.titleLine} ${styles.accent}`}>Получайте награды.</span>
          </h1>

          <p className={styles.lead}>
            Компании публикуют задания, вы выбираете подходящее,
            <br className={styles.desktopBreak} /> проходите его на сайте компании и получаете
            награду.
          </p>

          <div className={styles.actions}>
            <LinkButton to={routes.promotions} variant="primary" size="lg" className={styles.primaryCta}>
              Смотреть акции
            </LinkButton>
            <LinkButton
              to={routes.registerCompany}
              variant="secondary"
              size="lg"
              className={styles.secondaryCta}
            >
              Разместить акцию
            </LinkButton>
          </div>
        </div>

        <HeroCard imageSrc={findAsset('hero-coffee')} avatarSrc={findAsset('hero-company-avatar')} />
      </Container>
    </section>
  );
}
