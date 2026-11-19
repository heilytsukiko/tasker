type ClassValue = string | false | null | undefined;

/** Склеивает имена классов, пропуская пустые значения. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ');
}
