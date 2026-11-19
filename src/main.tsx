import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/app/App';
import '@/styles/tokens.css';
import '@/styles/fonts.css';
import '@/styles/global.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Не найден контейнер #root');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
