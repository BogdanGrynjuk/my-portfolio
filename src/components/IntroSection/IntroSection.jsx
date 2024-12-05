import React from 'react';

import css from './IntroSection.module.scss';
import Avatar from 'components/Avatar';

const IntroSection = () => {
  return (
    <section className={css['section']}>
      <h2 className={css['section__title']}>Who I am?</h2>

      <Avatar />
    </section>
  );
};

export default IntroSection;
