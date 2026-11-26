import { useMemo, useState } from 'react';
import { PromotionCard } from '@/entities/promotion';
import { SearchInput, SegmentedControl, type SegmentedOption } from '@/shared/ui';
import { Container } from '@/shared/ui/Container';
import { filterPromotions, type FormatFilter } from './model/filter';
import { mockCatalog } from './model/mock';
import styles from './CatalogPage.module.css';

const formatOptions: SegmentedOption<FormatFilter>[] = [
  { value: 'all', label: 'Все задания' },
  { value: 'online', label: 'Онлайн' },
  { value: 'offline', label: 'Офлайн' },
];

export function CatalogPage() {
  const [query, setQuery] = useState('');
  const [format, setFormat] = useState<FormatFilter>('all');

  const promotions = useMemo(
    () => filterPromotions(mockCatalog, { query, format }),
    [query, format],
  );

  return (
    <>
      <section className={styles.intro}>
        <Container className={styles.introInner}>
          <h1 className={styles.title}>Найдите своё задание</h1>

          <div className={styles.filters}>
            <SearchInput
              className={styles.search}
              aria-label="Поиск заданий"
              placeholder="Найти задание"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <SegmentedControl
              label="Формат задания"
              options={formatOptions}
              value={format}
              onChange={setFormat}
            />
          </div>
        </Container>
      </section>

      <section className={styles.list}>
        <Container className={styles.listInner}>
          <h2 className={styles.listTitle}>Доступные задания</h2>

          {promotions.length > 0 ? (
            <ul className={styles.grid}>
              {promotions.map((promotion) => (
                <li key={promotion.id}>
                  <PromotionCard promotion={promotion} />
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.empty}>
              Ничего не найдено. Измените запрос или выберите другой формат.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
