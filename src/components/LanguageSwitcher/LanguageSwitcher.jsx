import React from 'react';
import { useTranslation } from 'react-i18next';

import css from './LanguageSwitcher.module.scss';

import flagGB from 'assets/images/flags/GB.svg';
import flagUA from 'assets/images/flags/UA.svg';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={css.container}>
      <button
        onClick={() => changeLanguage('en')}
        className={`${css['container__button']} ${
          i18n.language === 'en' ? css['container__button--active'] : ''
        }`}
      >
        <img
          className={css['container__image']}
          src={flagGB}
          alt="flag Great Britain"
        />
      </button>
      <button
        onClick={() => changeLanguage('ua')}
        className={`${css['container__button']} ${
          i18n.language === 'ua' ? css['container__button--active'] : ''
        }`}
      >
        <img
          className={css['container__image']}
          src={flagUA}
          alt="flag Ukraine"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
