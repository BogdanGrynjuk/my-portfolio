import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import css from './ProjectItem.module.scss';

import LinkUI from 'components/UI/LinkUI';
import Modal from 'components/UI/ModalUI';
import ProjectDetails from 'components/ProjectDetails';
import ButtonUI from 'components/UI/ButtonUI';
import NotificationUI from 'components/UI/NotificationUI';

const ProjectItem = ({ project, startAutoplaySlider, stopAutoplaySlider }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const { t, i18n } = useTranslation();
  const description =
    project.description[i18n.language] || project.description.en;

  const openNotification = () => {
    setIsOpenNotification(true);
    stopAutoplaySlider();
  };

  const closeNotification = () => {
    setIsOpenNotification(false);
    startAutoplaySlider();
  };

  const openModal = () => {
    setIsOpenModal(true);
    stopAutoplaySlider();
  };

  const closeModal = () => {
    setIsOpenModal(false);
    startAutoplaySlider();
  };

  const bannerRef = useRef();

  useEffect(() => {
    const element = bannerRef.current;
    if (!element) return;

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.add(css.animated);
        } else {
          element.classList.remove(css.animated);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.01,
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={css.container}>
        <h3 className={css.container__title}>{project.title}</h3>

        <div className={css.banner} ref={bannerRef} onClick={openModal}>
          <img
            className={css.banner__img}
            src={project.img}
            alt={`application ${project.title}`}
          />
        </div>
        <p className={css.container__description}>{description}</p>
        <div className={css.container__resources}>
          <LinkUI
            className={css.container__link}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('see_website')}
          </LinkUI>
          {project.gitRepository ? (
            <LinkUI
              className={css.container__link}
              href={project.gitRepository}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('see_code')}
            </LinkUI>
          ) : (
            <ButtonUI
              type="button"
              className={css.container__button}
              onClick={openNotification}
            >
              {t('see_code')}
            </ButtonUI>
          )}
        </div>
      </div>
      {isOpenModal && (
        <Modal closeModal={closeModal}>
          <ProjectDetails
            title={project.title}
            img={project.img}
            technologies={project.technologies}
          />
        </Modal>
      )}
      {isOpenNotification && (
        <NotificationUI
          type="info"
          message={t('project_code_unavailable')}
          onClose={closeNotification}
        />
      )}
    </>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.shape({
      en: PropTypes.string.isRequired,
      ua: PropTypes.string.isRequired,
    }).isRequired,
    technologies: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    gitRepository: PropTypes.string,
    img: PropTypes.string.isRequired,
  }).isRequired,
  startAutoplaySlider: PropTypes.func.isRequired,
  stopAutoplaySlider: PropTypes.func.isRequired,
};

export default ProjectItem;
