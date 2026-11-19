import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from '@/pages/landing';
import { LoginPage } from '@/pages/login';
import { NotFoundPage } from '@/pages/not-found';
import { RegisterPage } from '@/pages/register';
import { routes } from '@/shared/config/routes';
import { AuthLayout } from './layouts/AuthLayout';
import { MainLayout } from './layouts/MainLayout';

/*
 * Маршруты приложения. Страницы подключаются сюда по мере появления:
 * спринт 3 — /promotions, /cabinet/*; спринт 4 — /admin.
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
  {
    element: <AuthLayout />,
    children: [
      { path: routes.login, element: <LoginPage /> },
      { path: routes.register, element: <RegisterPage /> },
    ],
  },
]);
