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
- Ассеты лендинга из Figma (фото челленджа, аватар компании, знак логотипа) → `src/assets/`
  с именами из `src/assets/README.md`. Подхватываются автоматически; пока файлов нет, показываются заглушки.

## Документация

Структура проекта, правила и план: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
