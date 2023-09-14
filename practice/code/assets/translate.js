const link = document.getElementById('toggleLang');
let language = localStorage.getItem('currentLanguage') || 'ru';

link.addEventListener('click', function (event) {
    event.preventDefault();
    language = language === 'ru' ? 'en' : 'ru';

    getTranslate();
});

function getTranslate() {
    localStorage.setItem('currentLanguage', language);

    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach((element) => {
        const translationKey = element.dataset.i18n;

        if (i18n.hasOwnProperty(language) && i18n[language].hasOwnProperty(translationKey)) {
            element.textContent = i18n[language][translationKey];
        }
    });
}

const i18n = {
    'en': {
      'header__title': 'BrandName',
      'nav__link-home': 'Home',
      'nav__link-product': 'Product',
      'nav__link-pricing': 'Pricing',
      'nav__link-contact': 'Contact',
      'login': 'Login',
      'header__btn': 'JOIN US',
      'intro__suptitle': 'Online training',
      'intro__title': '25K+ STUDENTS TRUST US',
      'intro__subtitle': 'Our goal is to make online education work for everyone',
      'intro__btn_1': 'Get Quote Now',
      'intro__btn_2': 'Learn More',
      'approdable__title': 'Approdable Packages',
      'approdable__subtitle': 'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics',
      'learn-more': 'Learn More',
      'text__suptitle': 'Courses',
      'text__title': 'Video in Live Action',
      'text__subtitle': 'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics',
      'sale__card__title': 'Expert instruction',
      'sale__card__title2': 'Every Client Matters',
      'sale__card__subtitle': 'We focus on ergonomics and meeting you....',
      'sale__card__title-books': 'Books Library',
      'sale__card__title2-approdable': 'Approdable Packages',
    },
    'ru': {
      'header__title': 'БрендНейм',
      'nav__link-home': 'Главная',
      'nav__link-product': 'Продукт',
      'nav__link-pricing': 'Цены',
      'nav__link-contact': 'Контакты',
      'login': 'Логин',
      'header__btn': 'Присоединяйтесь',
      'intro__suptitle': 'Онлайн обучение',
      'intro__title': '25 тыс. СТУДЕНТОВ ДОВЕРЯЮТ НАМ',
      'intro__subtitle': 'Наша цель - сделать онлайн-образование доступным для всех',
      'intro__btn_1': 'Получить котировку сейчас',
      'intro__btn_2': 'Узнать больше',
      'approdable__title': 'Выгодные пакеты',
      'approdable__subtitle': 'Проблемы, связанные с разрешением конфликта между двумя основными областями классической физики: механикой Ньютона',
      'learn-more': 'Узнать больше',
      'text__suptitle': 'Курсы',
      'text__title': 'Видео в действии',
      'text__subtitle': 'Проблемы, связанные с разрешением конфликта между двумя основными областями классической физики: механикой Ньютона',
      'sale__card__title': 'Профессиональное обучение',
      'sale__card__title2': 'Каждый клиент важен',
      'sale__card__subtitle': 'Мы сосредотачиваемся на эргономике и удовлетворении ваших потребностей...',
      'sale__card__title-books': 'Библиотека книг',
      'sale__card__title2-approdable': 'Выгодные пакеты',
    },
  };

getTranslate('en');