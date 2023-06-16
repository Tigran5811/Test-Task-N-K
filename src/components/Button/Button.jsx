import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export const Button = ({
  onClick, text, type, disabled, close,
}) => (
  <button
    disabled={disabled}
    type={type}
    className={cx('primary', { close })}
    onClick={onClick}
  >
    {text}
  </button>
);
