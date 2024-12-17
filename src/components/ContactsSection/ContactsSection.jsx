import FeedbackForm from 'components/FeedbackForm';
import React from 'react';
import { useTranslation } from 'react-i18next';

import css from './ContactsSection.module.scss';

const ContactsSection = () => {
  const { t } = useTranslation();

  return (
    <section className={css['section']}>
      <h2 className="visually-hidden">{t('my_contacts')}</h2>
      <FeedbackForm />
    </section>
  );
};

export default ContactsSection;
