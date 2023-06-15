import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import styles from './Search.module.scss';
import { filterTaskAction } from '../../redux/actions/tasks';

const cx = classNames.bind(styles);

export const Search = ({ search }) => {
  const [{
    nameLike, descriptionLike, startDate, endDate,
  }, setStat] = useState({
    nameLike: '',
    descriptionLike: '',
    startDate: '',
    endDate: '',

  });
  const dispatch = useDispatch();

  const onChange = ({ currentTarget: { value, name } }) => {
    setStat((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const startDates = startDate && `&startDate=${startDate}`;
    const endDates = endDate && `&endDate=${endDate}`;
    dispatch(filterTaskAction(nameLike, descriptionLike, startDates, endDates));
  };

  return (
    <div className={cx('search', { open: search })}>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={nameLike} name="nameLike" placeholder="Name Like" type="text" />
        <input onChange={onChange} value={descriptionLike} name="descriptionLike" placeholder="Description Like" type="text" />
        <input onChange={onChange} value={startDate} name="startDate" placeholder="Start Date" type="date" />
        <input onChange={onChange} value={endDate} name="endDate" placeholder="End Date" type="date" />
        <button type="submit">Filter</button>

      </form>
    </div>
  );
};
