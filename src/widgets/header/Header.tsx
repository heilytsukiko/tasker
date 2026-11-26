import { landingAnchors, routes } from '@/shared/config/routes';
import { cn } from '@/shared/lib/cn';
import { LinkButton, Logo } from '@/shared/ui';
import { Container } from '@/shared/ui/Container';
import styles from './Header.module.css';

export type HeaderVariant = 'landing' | 'compact';

interface HeaderProps {
  /** landing — с навигацией по разделам; compact — только логотип и кнопки (каталог и др.). */
  variant?: HeaderVariant;
}

const navItems = [
  { label: 'Как это работает', href: `${routes.home}#${landingAnchors.howItWorks}` },
  { label: 'Акции', href: `${routes.home}#${landingAnchors.promotions}` },
  { label: 'Компании', href: `${routes.home}#${landingAnchors.companies}` },
  { label: 'Отзывы', href: `${routes.home}#${landingAnchors.reviews}` },
];

export function Header({ variant = 'landing' }: HeaderProps) {
  return (
    <header className={cn(styles.header, styles[variant])}>
      <Container className={styles.inner}>
        <Logo />

        {variant === 'landing' && (
          <nav className={styles.nav} aria-label="Основная навигация">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        )}

        <div className={styles.actions}>
          <LinkButton to={routes.login} variant="secondary" size="sm" className={styles.login}>
            Войти
          </LinkButton>
          <LinkButton to={routes.register} variant="primary" size="sm" className={styles.register}>
            Регистрация
          </LinkButton>
        </div>
      </Container>
    </header>
  );
}
