import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

import { Keyboard, Navigation, Autoplay } from 'swiper/modules';

import css from './ProjectsSection.module.scss';

function ProjectsSection() {
  const { t } = useTranslation();
  return (
    <section className={css.section}>
      <h2 className="visually-hidden">{t('my_projects')}</h2>
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        speed={1500}
        navigation={true}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        modules={[Keyboard, Navigation, Autoplay]}
        className={css.slider}
      >
        <SwiperSlide>
          <div>Slide 1</div>
        </SwiperSlide>

        <SwiperSlide>
          <div>Slide 2</div>
        </SwiperSlide>

        <SwiperSlide>
          <div>Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default ProjectsSection;
