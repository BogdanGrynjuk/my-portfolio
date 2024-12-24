import React, { useState } from 'react';

import css from './IntroSection.module.scss';
import Avatar from 'components/Avatar';
import { useTranslation } from 'react-i18next';
import ButtonUI from 'components/UI/ButtonUI/ButtonUI';
import LinkUI from 'components/UI/LinkUI';
import ModalUI from 'components/UI/ModalUI';
import SkillsSection from 'components/SkillsSection';

const IntroSection = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { t } = useTranslation();
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <section className={css['section']}>
      <h2 className={css['section__title']}>{t('who_am_I')}</h2>
      <p className={css['section__text']}>{t('about_me')}</p>

      <Avatar />
      <p className={css['section__text']}>{t('my_goal')}</p>
      <div className={css['section__controls']}>
        <ButtonUI
          className={css['section__controls-item']}
          onClick={toggleModal}
        >
          {t('see_my_skills')}
        </ButtonUI>
        <LinkUI
          className={css['section__controls-item']}
          href="/my-portfolio/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('see_my_cv')}
        </LinkUI>
      </div>
      {isOpenModal && (
        <ModalUI closeModal={toggleModal}>
          <SkillsSection />
        </ModalUI>
      )}
    </section>
  );
};

export default IntroSection;
