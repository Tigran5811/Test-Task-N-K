import React from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export const Header = () => (
  <div className={cx('container')}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/employees">Employees</NavLink>
    <NavLink to="/tasks">Tasks</NavLink>
  </div>
);
