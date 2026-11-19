import { routes } from '@/shared/config/routes';
import { LinkButton } from '@/shared/ui';
import { Container } from '@/shared/ui/Container';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <Container className={styles.page}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>Такой страницы нет. Возможно, она ещё в разработке.</p>
      <LinkButton to={routes.home} variant="primary" size="md">
        На главную
      </LinkButton>
    </Container>
  );
}
