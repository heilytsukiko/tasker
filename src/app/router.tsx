import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from '@/pages/landing';
import { NotFoundPage } from '@/pages/not-found';
import { routes } from '@/shared/config/routes';
import { MainLayout } from './layouts/MainLayout';

/*
 * Маршруты приложения. Страницы подключаются сюда по мере появления:
 * спринт 2 — /login, /register; спринт 3 — /promotions, /cabinet/*; спринт 4 — /admin.
 * Для закрытых разделов позже добавится обёртка с проверкой роли (см. docs/ARCHITECTURE.md).
 */
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: routes.home, element: <LandingPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
