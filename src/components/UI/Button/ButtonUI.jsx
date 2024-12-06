import React from 'react';
import PropTypes from 'prop-types';

import css from './ButtonUI.module.scss';

const ButtonUI = ({ children, onClick, className, ...attrs }) => {
  return (
    <button
      className={`${className || ''} ${css.button}`}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </button>
  );
};

ButtonUI.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default ButtonUI;
