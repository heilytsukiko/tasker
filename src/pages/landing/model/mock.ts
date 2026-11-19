import type { PromotionPreview } from '@/entities/promotion';

/**
 * Временные данные для превью каталога на лендинге (тексты из макета).
 * Заменить запросом к API объявлений в спринте 3.
 */
export const mockPromotions: PromotionPreview[] = [1, 2, 3].map((id) => ({
  id,
  address: 'Астана, ул. Рыскулбекова, 16',
  companyName: 'Кофейня “Melly’s”',
  title: 'Проверьте часы работы кофейни',
  description: 'Посетите кофейню за 15 минут до закрытия и сделайте видеофиксацию…',
  reward: 'латте в подарок',
}));
