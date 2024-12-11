import React from 'react';
import PropTypes from 'prop-types';

import css from './ProjectDetails.module.scss';
import { useTranslation } from 'react-i18next';

import mask from 'assets/images/masks/dynamic-mask.gif';

const ProjectDetails = ({ project }) => {
  const { title, img, technologies } = project;
  const { t } = useTranslation();
  return (
    <div className={css.project}>
      <h2 className={css.project__name}>{title}</h2>
      <div className={css.project__banner}>
        <img
          src={img}
          alt={`project ${title}`}
          style={{
            '--mask-image': `url(${mask}?${Date.now()})`,
          }}
        />
      </div>
      <p className={css.project__details}>
        <span>
          {t('built_with')}
          {': '}
        </span>
        {technologies}
      </p>
    </div>
  );
};

export default ProjectDetails;

ProjectDetails.propTypes = {
  project: PropTypes.object.isRequired,
};
