import { Outlet } from 'react-router-dom';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

/** Общая оболочка публичных страниц: шапка, контент, подвал. */
export function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
