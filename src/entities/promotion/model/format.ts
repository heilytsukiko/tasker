import type { PromotionPreview } from './types';

/** Формат задания: онлайн или офлайн (с посещением места). */
export type PromotionFormat = 'online' | 'offline';

export const promotionFormatLabels: Record<PromotionFormat, string> = {
  online: 'Онлайн',
  offline: 'Офлайн',
};

/**
 * В БД отдельного поля формата нет: у онлайн-заданий адрес не указывается,
 * поэтому формат определяем по наличию адреса.
 */
export function getPromotionFormat(promotion: Pick<PromotionPreview, 'address'>): PromotionFormat {
  return promotion.address?.trim() ? 'offline' : 'online';
}
