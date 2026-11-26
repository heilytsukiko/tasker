import { getPromotionFormat, type PromotionFormat, type PromotionPreview } from '@/entities/promotion';

export type FormatFilter = 'all' | PromotionFormat;

export interface CatalogFilters {
  query: string;
  format: FormatFilter;
}

/** Поиск по названию, компании и описанию без учёта регистра + фильтр формата. */
export function filterPromotions(
  promotions: PromotionPreview[],
  { query, format }: CatalogFilters,
): PromotionPreview[] {
  const needle = query.trim().toLowerCase();

  return promotions.filter((promotion) => {
    if (format !== 'all' && getPromotionFormat(promotion) !== format) return false;
    if (!needle) return true;

    return [promotion.title, promotion.companyName, promotion.description].some((field) =>
      field.toLowerCase().includes(needle),
    );
  });
}
