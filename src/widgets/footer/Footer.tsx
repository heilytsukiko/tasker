import { Container } from '@/shared/ui/Container';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.copyright}>Tasker © {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}
