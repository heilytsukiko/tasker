/** Единый список адресов приложения. Ссылки в коде берём только отсюда. */
export const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  registerCompany: '/register?role=company',
  promotions: '/promotions',
  promotion: (id: number | string) => `/promotions/${id}`,
} as const;

/** Якоря секций лендинга (используются в навигации шапки). */
export const landingAnchors = {
  howItWorks: 'how-it-works',
  promotions: 'promotions',
  companies: 'companies',
  reviews: 'reviews',
} as const;
