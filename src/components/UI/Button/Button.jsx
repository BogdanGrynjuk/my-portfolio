import React from 'react';
import PropTypes from 'prop-types';

import css from './Button.module.scss';

const Button = ({ children, onClick, className, ...attrs }) => {
  return (
    <button
      className={`${css.button} ${className || ''}`}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
