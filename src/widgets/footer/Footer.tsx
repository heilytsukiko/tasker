import { cn } from '@/shared/lib/cn';
import { Container } from '@/shared/ui/Container';
import styles from './Footer.module.css';

export type FooterVariant = 'landing' | 'compact';

interface FooterProps {
  variant?: FooterVariant;
}

export function Footer({ variant = 'landing' }: FooterProps) {
  return (
    <footer className={cn(styles.footer, variant === 'compact' && styles.compact)}>
      <Container>
        <p className={styles.copyright}>Tasker © {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}
