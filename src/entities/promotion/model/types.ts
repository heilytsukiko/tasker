/**
 * Данные карточки акции для каталога и лендинга.
 * Это модель отображения; форма ответа API (promotions + companies + отзывы)
 * уточнится после согласования контракта с backend. В БД отдельного поля награды нет —
 * награда указывается в описании, поэтому `reward` пока приходит как готовая строка.
 */
export interface PromotionPreview {
  id: number;
  companyName: string;
  title: string;
  description: string;
  reward: string;
  /** Необязательный адрес (онлайн-челленджи его не имеют). */
  address?: string;
}
