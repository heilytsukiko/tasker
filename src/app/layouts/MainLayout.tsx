import { Outlet } from 'react-router-dom';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

interface MainLayoutProps {
  /** landing — шапка с меню (лендинг); compact — шапка и подвал каталога по макету. */
  variant?: 'landing' | 'compact';
}

/** Общая оболочка публичных страниц: шапка, контент, подвал. */
export function MainLayout({ variant = 'landing' }: MainLayoutProps) {
  return (
    <>
      <Header variant={variant} />
      <main>
        <Outlet />
      </main>
      <Footer variant={variant} />
    </>
  );
}
