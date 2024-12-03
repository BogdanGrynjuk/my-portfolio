import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/mousewheel';
import css from './Slider.module.scss';

const Slider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const app = document.getElementById('root');
    const pagination = app.querySelector('.swiper-pagination');
    const header = app.querySelector(`.${css['header-container']}`);

    if (pagination && header && !header.contains(pagination)) {
      header.prepend(pagination);
    }
  }, []);

  return (
    <>
      <header className={css['header-container']}>
        <h1 className={'visually-hidden'}>{'Portfolio by Bogdan Grynjuk'}</h1>
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
              const labels = ['Intro', 'Projects', 'Contacts'];
              return `<span class="${className}">${labels[index]}</span>`;
            },
          }}
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
        >
          <SwiperSlide>
            <h2>Intro Section</h2>
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
