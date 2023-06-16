import React from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

export const Modal = ({ modal, children }) => (
  <div className={cx('modal', { open: modal })}>
    {children}
  </div>
);
