import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  const sliderRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const startAutoplaySlider = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.autoplay.start();
    }
  }, []);

  const stopAutoplaySlider = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.autoplay.stop();
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    const currentSlider = sliderRef.current;

    if (currentSlider) {
      observer.observe(currentSlider);
    }

    return () => {
      if (currentSlider) {
        observer.unobserve(currentSlider);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      startAutoplaySlider();
    } else {
      stopAutoplaySlider();
    }
  }, [isVisible, startAutoplaySlider, stopAutoplaySlider]);

  return (
    <section className={css.section}>
      <h2 className="visually-hidden">{t('my_projects')}</h2>
      <Swiper
        ref={sliderRef}
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
            <ProjectItem
              project={project}
              startAutoplaySlider={startAutoplaySlider}
              stopAutoplaySlider={stopAutoplaySlider}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProjectsSection;
