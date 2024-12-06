import React from 'react';

import css from './IntroSection.module.scss';
import Avatar from 'components/Avatar';
import { useTranslation } from 'react-i18next';

const IntroSection = () => {
  const { t } = useTranslation();
  return (
    <section className={css['section']}>
      <h2 className={css['section__title']}>{t('who_am_I')}</h2>

      <Avatar />
    </section>
  );
};

export default IntroSection;
