import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import css from './NotificationUI.module.scss';

import close from 'assets/images/icons/close.svg';
import success from 'assets/images/icons/success.svg';
import error from 'assets/images/icons/error.svg';
import info from 'assets/images/icons/info.svg';

const TOAST_ICONS_MAP = {
  success: success,
  error: error,
  info: info,
};

const modalRoot = document.querySelector('#modal-root');
const NotificationUI = ({ type, message, onClose }) => {
  const { t } = useTranslation();
  const handleBackdropClick = useCallback(
    event => {
      if (event.currentTarget === event.target) {
        onClose();
      }
    },
    [onClose]
  );

  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const timeout = setTimeout(() => onClose(), 5000);
    return () => clearTimeout(timeout);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <div className={css.container} onClick={handleBackdropClick}>
      <div className={`${css.toast} ${css[`toast--${type}`]}`}>
        <img
          className={css['toast__icon']}
          src={TOAST_ICONS_MAP[type]}
          alt={`icon ${type}`}
        />
        <div className={css['toast__content']}>
          <h4 className={css['toast__title']}>{t(`${type}`)}</h4>
          <span className={css['toast__message']}>{message}</span>
        </div>
        <button
          className={css['toast__button-close']}
          type="button"
          onClick={onClose}
        >
          <img className={css['toast__icon']} src={close} alt="icon close" />
        </button>
        <div
          className={`${css['toast__progress']} ${
            css[`toast__progress--${type}`]
          }`}
        ></div>
      </div>
    </div>,
    modalRoot
  );
};

NotificationUI.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'info']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NotificationUI;
