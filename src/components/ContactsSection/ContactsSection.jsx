import FeedbackForm from 'components/FeedbackForm';
import React from 'react';
import { useTranslation } from 'react-i18next';

import css from './ContactsSection.module.scss';

import ContactInfo from 'components/ContactInfo';
import SocialProfilesUI from 'components/UI/SocialProfilesUI';

const ContactsSection = () => {
  const { t } = useTranslation();
  const currenYear = new Date().getFullYear();

  return (
    <section className={css.section}>
      <h2 className="visually-hidden">{t('my_contacts')}</h2>
      <p className={css['section__header']}>{t('contact_intro')}</p>

      <div className={css['section__main']}>
        <FeedbackForm />
        <ContactInfo />
        <SocialProfilesUI />
      </div>

      <p className={css['section__footer']}>
        &copy; {currenYear}. {t('all_right_reserved')}
      </p>
    </section>
  );
};

export default ContactsSection;
