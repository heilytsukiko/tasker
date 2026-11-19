import { landingAnchors, routes } from '@/shared/config/routes';
import { LinkButton } from '@/shared/ui';
import { Container } from '@/shared/ui/Container';
import styles from './CompanyCta.module.css';

export function CompanyCta() {
  return (
    <section id={landingAnchors.companies} className={styles.section}>
      <Container>
        <div className={styles.panel}>
          <h2 className={styles.title}>Хотите привлечь активных участников?</h2>
          <p className={styles.text}>
            Зарегистрируйте компанию, пройдите проверку
            <br />и публикуйте акции и челленджи.
          </p>
          <LinkButton to={routes.registerCompany} variant="dark" size="lg" className={styles.button}>
            Зарегистрировать компанию
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
