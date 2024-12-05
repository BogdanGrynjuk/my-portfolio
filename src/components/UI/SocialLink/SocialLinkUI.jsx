import React from 'react';
import PropTypes from 'prop-types';

import css from './SocialLinkUI.module.scss';
const SocialLinkUI = ({ url, name, icon, className }) => {
  return (
    <a
      className={`${css.link} ${className || ''}`}
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      <img src={icon} alt={name} />
    </a>
  );
};

SocialLinkUI.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SocialLinkUI;
