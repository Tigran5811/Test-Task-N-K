import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterTaskAction } from '../../redux/actions/tasks';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';

export const Search = () => {
  const [{
    nameLike, descriptionLike, startDate, endDate,
  }, setStat] = useState({
    nameLike: '',
    descriptionLike: '',
    startDate: '',
    endDate: '',
  });
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();

  const onChange = ({ currentTarget: { value, name } }) => {
    setStat((prev) => ({ ...prev, [name]: value }));
  };

  const openSearch = () => {
    setSearch(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const startDates = startDate && `&startDate=${startDate}`;
    const endDates = endDate && `&endDate=${endDate}`;
    dispatch(filterTaskAction(nameLike, descriptionLike, startDates, endDates));
    setStat(
      {
        nameLike: '',
        descriptionLike: '',
        startDate: '',
        endDate: '',
      },
    );
  };

  const closeModal = () => {
    setSearch(false);
  };

  return (
    <>
      <Modal modal={search}>
        <form onSubmit={onSubmit}>
          <Button type="button" close onClick={closeModal} text="X" />
          <input onChange={onChange} value={nameLike} name="nameLike" placeholder="Name Like" type="text" />
          <input onChange={onChange} value={descriptionLike} name="descriptionLike" placeholder="Description Like" type="text" />
          <input onChange={onChange} value={startDate} name="startDate" placeholder="Start Date" type="date" />
          <input onChange={onChange} value={endDate} name="endDate" placeholder="End Date" type="date" />
          <Button text="Filter" onClick={closeModal} type="submit" />
        </form>
      </Modal>
      <Button className="primary" onClick={openSearch} text="Open Search" />

    </>
  );
};
