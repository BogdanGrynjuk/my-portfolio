import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/mousewheel';
import css from './Slider.module.scss';

import IntroSection from 'components/IntroSection';
import LanguageSwitcher from 'components/LanguageSwitcher';

const Slider = () => {
  const swiperRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const app = document.getElementById('root');
    const pagination = app.querySelector('.swiper-pagination');
    const header = app.querySelector(`.${css['header-container']}`);

    if (pagination && header && !header.contains(pagination)) {
      header.prepend(pagination);
    }
  }, []);

  useEffect(() => {
    const updatePaginationLabels = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.pagination.render();
        swiperRef.current.swiper.pagination.update();
      }
    };

    i18n.on('languageChanged', updatePaginationLabels);

    return () => {
      i18n.off('languageChanged', updatePaginationLabels);
    };
  }, [i18n]);

  return (
    <>
      <header className={css['header-container']}>
        <h1 className={'visually-hidden'}>
          {t('portfolio_by_Bogdan_Grynjuk')}
        </h1>
        <LanguageSwitcher />
      </header>

      <main className={css['main-container']}>
        <Swiper
          ref={swiperRef}
          direction="vertical"
          slidesPerView={1}
          speed={1500}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              const labels = t('menu_labels', { returnObjects: true });
              return `<span class="${className}">${labels[index]}</span>`;
            },
          }}
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
        >
          <SwiperSlide>
            <IntroSection />
          </SwiperSlide>
          <SwiperSlide>
            <h2>Projects Section</h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2>Contacts Section</h2>
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
};

export default Slider;
