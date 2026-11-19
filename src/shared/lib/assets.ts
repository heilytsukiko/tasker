/**
 * Подхват картинок по имени файла без расширения.
 * Положите файл в src/assets/ (jpg, png, webp или svg) — он подставится сам;
 * пока файла нет, функция возвращает undefined и компонент показывает заглушку.
 */
const files = import.meta.glob<string>('/src/assets/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function findAsset(name: string): string | undefined {
  for (const [path, url] of Object.entries(files)) {
    const fileName = path.split('/').pop() ?? '';
    if (fileName.replace(/\.[^.]+$/, '') === name) return url;
  }
  return undefined;
}
