# Tasker — frontend

Платформа акций и челленджей: каталог объявлений компаний, отзывы с фото, жалобы, модерация.
Фронтенд: React + TypeScript + CSS Modules (Vite).

## Запуск

```bash
npm install
cp .env.example .env   # адрес backend API
npm run dev            # http://localhost:5173
```

Скрипты: `npm run build`, `npm run typecheck`, `npm run lint`, `npm run format`.

## Что нужно положить вручную

- Шрифт Sansation → `public/fonts/` (см. `public/fonts/README.md`).
- Ассеты лендинга из Figma (фото челленджа, аватар компании, знак логотипа) → `src/assets/landing/`.
  Пока их нет, в этих местах стоят заглушки (помечены `TODO`).

## Документация

Структура проекта, правила и план: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
