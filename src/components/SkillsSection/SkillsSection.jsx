import React from 'react';
import { useTranslation } from 'react-i18next';

import { TECH_SKILLS } from 'constants/techSkills';

import css from './SkillsSection.module.scss';

const SkillsSection = () => {
  const { t } = useTranslation();

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
    </section>
  );
};

export default SkillsSection;
