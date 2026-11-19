import { landingAnchors } from '@/shared/config/routes';
import { Container } from '@/shared/ui/Container';
import styles from './Trust.module.css';

const features = [
  { title: 'Отзыв с фото', text: 'Подтверждает, что вы прошли челлендж' },
  { title: 'Рейтинг компаний', text: 'Средняя оценка по отзывам видна всем' },
  { title: 'Защита от обмана', text: '3 подтверждённые жалобы — компания блокируется' },
];

export function Trust() {
  return (
    <section id={landingAnchors.reviews} className={styles.section}>
      <Container>
        <div className={styles.panel}>
          <div className={styles.intro}>
            <h2 className={styles.title}>
              Отзывы с фото
              <br />
              подтверждают участие
            </h2>
            <p className={styles.text}>
              Если награду не выдали, пользователь подаёт жалобу.
              <br />
              Каждую жалобу рассматривает администратор.
            </p>
          </div>

          <ul className={styles.list}>
            {features.map((feature) => (
              <li key={feature.title} className={styles.item}>
                <span className={styles.dot} aria-hidden="true" />
                <div>
                  <h3 className={styles.itemTitle}>{feature.title}</h3>
                  <p className={styles.itemText}>{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
