import React, { useEffect, useRef, useState } from 'react';
import SocialLinkUI from 'components/UI/SocialLink';
import css from './Avatar.module.scss';
import { SOCIAL_NETWORKS } from 'constants/socialNetworks';
import { useTranslation } from 'react-i18next';

const Avatar = () => {
  const [isVisibleContent, setIsVisibleContent] = useState(false);
  const avatarRef = useRef();
  const { t } = useTranslation();

  const toggleVisibleContent = () => {
    setIsVisibleContent(!isVisibleContent);
  };

  useEffect(() => {
    const element = avatarRef.current;

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.add(css['container--animated']);
        } else {
          element.classList.remove(css['container--animated']);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.01,
    });

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div ref={avatarRef} className={css.container}>
      <div className={css['container__content']} onClick={toggleVisibleContent}>
        <div
          className={`${css['container__content-top']} ${
            isVisibleContent ? css['container__content-top--visible'] : ''
          }`}
        >
          <h2>{t('my_name')}</h2>
          <p>{t('front-end_developer')}</p>
        </div>
        <div
          className={`${css['container__content-bottom']} ${
            isVisibleContent ? css['container__content-bottom--visible'] : ''
          }`}
        >
          <p>{t('online_profiles')}</p>
          <ul className={css['container__social-list']}>
            {SOCIAL_NETWORKS.map(({ id, name, url, icon }) => (
              <li key={id}>
                <SocialLinkUI name={name} url={url} icon={icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
