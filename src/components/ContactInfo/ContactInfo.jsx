import React from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as LocationIcon } from 'assets/images/icons/location.svg';
import { ReactComponent as EmailIcon } from 'assets/images/icons/email.svg';
import { ReactComponent as PhoneIcon } from 'assets/images/icons/phone.svg';

import css from './ContactInfo.module.scss';

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={css.container}>
        <h3>{t('my_contacts')}:</h3>
        <address className={css.contacts}>
          <a
            className={css.link}
            href="https://maps.app.goo.gl/5yhva4vJy9vsLoDy8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LocationIcon className={css.icon} />
            {t('my_address')}
          </a>

          <a
            className={css.link}
            href="tel:+380964287231"
            rel="noopener noreferrer"
          >
            <PhoneIcon className={css.icon} />
            +380964287231
          </a>

          <a
            className={css.link}
            href="mailto:bgrynjuk@ukr.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon className={css.icon} />
            bgrynjuk@ukr.net
          </a>
        </address>
      </div>
    </>
  );
};

export default ContactInfo;
