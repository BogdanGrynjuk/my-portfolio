import React from 'react';
import PropTypes from 'prop-types';

import SocialLinkUI from 'components/UI/SocialLinkUI';
import { SOCIAL_NETWORKS } from 'constants/socialNetworks';

import css from './SocialProfilesUI.module.scss';
const SocialProfilesUI = ({ className }) => (
  <ul className={`${css['social-profiles']} ${className || ''}`}>
    {SOCIAL_NETWORKS.map(({ id, name, url, icon }) => (
      <li key={id}>
        <SocialLinkUI name={name} url={url} icon={icon} />
      </li>
    ))}
  </ul>
);

SocialProfilesUI.propTypes = {
  className: PropTypes.string,
};

export default SocialProfilesUI;
