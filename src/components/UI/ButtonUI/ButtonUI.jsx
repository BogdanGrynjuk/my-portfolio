import React from 'react';
import PropTypes from 'prop-types';

import css from './ButtonUI.module.scss';

const ButtonUI = ({ children, onClick, className, type, ...attrs }) => {
  return (
    <button
      type={type}
      className={`${className || ''} ${css.container}`}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </button>
  );
};

ButtonUI.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ButtonUI.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: '',
  type: 'button',
};

export default ButtonUI;
