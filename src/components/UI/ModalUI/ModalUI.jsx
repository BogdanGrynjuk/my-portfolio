import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import ButtonUI from '../Button/ButtonUI';

import css from './ModalUI.module.scss';

import arrow from 'assets/images/icons/arrow-right.svg';

const modalRoot = document.querySelector('#modal-root');
const ModalUI = ({ closeModal, children }) => {
  const { t } = useTranslation();

  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return createPortal(
    <div className={css.container}>
      <ButtonUI className={css['container__btn-close']} onClick={closeModal}>
        <img src={arrow} alt="arrow-left" />
        <span>{t('back')}</span>
      </ButtonUI>
      {children}
    </div>,
    modalRoot
  );
};

export default ModalUI;

ModalUI.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};
