import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Loader.module.scss';
import { getLoaderSelector } from '../../redux/selectors/loader';

const cx = classNames.bind(styles);

export const Loader = () => {
  const loader = useSelector(getLoaderSelector);
  return (
    <div className={cx('container', { open: loader })}>
      <div className={styles.loader} />
    </div>
  );
};
