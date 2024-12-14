import React from 'react';
import { useTranslation } from 'react-i18next';

import ButtonUI from 'components/UI/Button/ButtonUI';

import { TECH_SKILLS } from 'constants/techSkills';

import css from './SkillsSection.module.scss';

import arrowRight from 'assets/images/icons/arrow-right.svg';

const SkillsSection = () => {
  const { t } = useTranslation();

  const handleClickPrev = () => {
    console.log('prev');
  };

  const handleClickNext = () => {
    console.log('next');
  };

  return (
    <section className={css.container}>
      <h2 className="visually-hidden">{t('my_tech_skills')}</h2>

      <div className={css.slider}>
        {TECH_SKILLS.map((item, index, arr) => (
          <div
            key={index}
            className={css['slide']}
            style={{
              '--slide-index': `${index}`,
              '--quantity-slides': `${arr.length}`,
            }}
          >
            <div className={css['slide__content']}>
              <img
                className={css['slide__icon']}
                src={item.img}
                alt={`icon ${item.title}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={css.controls}>
        <ButtonUI
          onClick={handleClickPrev}
          className={`${css['controls__button']} ${css['controls__button--prev']}`}
        >
          <img src={arrowRight} alt="arrow previous slide" />
        </ButtonUI>
        <ButtonUI
          onClick={handleClickNext}
          className={`${css['controls__button']} ${css['controls__button--next']}`}
        >
          <img src={arrowRight} alt="arrow next slide" />
        </ButtonUI>
      </div>
    </section>
  );
};

export default SkillsSection;
