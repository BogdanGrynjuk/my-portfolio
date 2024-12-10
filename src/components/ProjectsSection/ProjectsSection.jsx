import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Navigation, Autoplay } from 'swiper/modules';

import css from './ProjectsSection.module.scss';

import { PROJECTS } from 'constants/projects';
import ProjectItem from 'components/ProjectItem';

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
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Keyboard, Navigation, Autoplay]}
        className={css.slider}
      >
        {PROJECTS.map(project => (
          <SwiperSlide key={project.id}>
            <ProjectItem project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProjectsSection;
