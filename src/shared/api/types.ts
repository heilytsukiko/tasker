/*
 * Типы, соответствующие схеме БД (ebobo.sql, версия 2).
 * Это справочник значений для фронта; полный API-контракт согласуем с backend
 * до начала спринта 3 (см. docs/ARCHITECTURE.md).
 */

export type UserRole = 'user' | 'company' | 'admin';

export type CompanyStatus = 'pending' | 'approved' | 'rejected' | 'blocked';

export type PromotionStatus =
  | 'draft'
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'hidden'
  | 'finished';

export type ReportStatus = 'open' | 'approved' | 'rejected';

export type ReportReasonType =
  | 'impossible_requirements'
  | 'personal_data_collection'
  | 'suspected_fraud'
  | 'branch_closed_or_missing'
  | 'wrong_reward_info'
  | 'other';

/** Русские подписи причин жалоб для интерфейса. */
export const reportReasonLabels: Record<ReportReasonType, string> = {
  impossible_requirements: 'Невыполнимые требования',
  personal_data_collection: 'Сбор личных данных',
  suspected_fraud: 'Подозрение на мошенничество',
  branch_closed_or_missing: 'Филиал закрыт или не существует',
  wrong_reward_info: 'Не правильно указана награда',
  other: 'Другое',
};
