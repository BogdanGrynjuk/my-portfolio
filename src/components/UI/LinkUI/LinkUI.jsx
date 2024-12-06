import React from 'react';
import PropTypes from 'prop-types';

import css from './LinkUI.module.scss';

const LinkUI = ({ children, onClick, className, href, ...attrs }) => {
  return (
    <a
      className={`${className || ''} ${css.container}`}
      href={href}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </a>
  );
};

LinkUI.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

LinkUI.defaultProps = {
  children: 'Default link',
  onClick: () => {},
  className: '',
};

export default LinkUI;
