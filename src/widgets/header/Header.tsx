import { landingAnchors, routes } from '@/shared/config/routes';
import { LinkButton, Logo } from '@/shared/ui';
import { Container } from '@/shared/ui/Container';
import styles from './Header.module.css';

const navItems = [
  { label: 'Как это работает', href: `${routes.home}#${landingAnchors.howItWorks}` },
  { label: 'Акции', href: `${routes.home}#${landingAnchors.promotions}` },
  { label: 'Компании', href: `${routes.home}#${landingAnchors.companies}` },
  { label: 'Отзывы', href: `${routes.home}#${landingAnchors.reviews}` },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Logo />

        <nav className={styles.nav} aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

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
