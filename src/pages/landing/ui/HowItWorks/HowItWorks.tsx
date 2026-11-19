import { landingAnchors } from '@/shared/config/routes';
import { Container } from '@/shared/ui/Container';
import { mockSteps } from '../../model/mock';
import styles from './HowItWorks.module.css';
import { StepCard } from './StepCard';

export function HowItWorks() {
  return (
    <section id={landingAnchors.howItWorks} className={styles.section}>
      <Container>
        <h2 className={styles.title}>Как это работает</h2>
        <p className={styles.subtitle}>Три шага от поиска до награды</p>

        <ol className={styles.steps}>
          {mockSteps.map((step) => (
            <StepCard key={step.id} title={step.title} description={step.description} />
          ))}
        </ol>
      </Container>
    </section>
  );
}
