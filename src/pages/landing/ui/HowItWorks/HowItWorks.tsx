import { landingAnchors } from '@/shared/config/routes';
import { Container } from '@/shared/ui/Container';
import styles from './HowItWorks.module.css';

/*
 * В макете (фрейм 67:44) в этой секции есть только заголовок и подзаголовок,
 * карточек «три шага» нет. Когда дизайнер их нарисует — добавить сюда список шагов.
 */
export function HowItWorks() {
  return (
    <section id={landingAnchors.howItWorks} className={styles.section}>
      <Container>
        <h2 className={styles.title}>Как это работает</h2>
        <p className={styles.subtitle}>Три шага от поиска до награды</p>
      </Container>
    </section>
  );
}
