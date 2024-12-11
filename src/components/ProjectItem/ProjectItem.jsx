import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import css from './ProjectItem.module.scss';

import LinkUI from 'components/UI/LinkUI';
import Modal from 'components/UI/ModalUI';
import ProjectDetails from 'components/ProjectDetails';

const ProjectItem = ({ project }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { t, i18n } = useTranslation();
  const description =
    project.description[i18n.language] || project.description.en;

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
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

        <div className={css.banner} ref={bannerRef} onClick={toggleModal}>
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
          <LinkUI
            className={css.container__link}
            href={project.gitRepository}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('see_code')}
          </LinkUI>
        </div>
      </div>
      {isOpenModal && (
        <Modal closeModal={toggleModal}>
          <ProjectDetails project={project} />
        </Modal>
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
    gitRepository: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItem;
