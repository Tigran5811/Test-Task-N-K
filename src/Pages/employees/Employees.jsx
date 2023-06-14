import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { getEmployeesSelector } from '../../redux/selectors/employees';
import { createEmployeeAction, getEmployeesAction } from '../../redux/actions/employees';
import { Table } from '../../components/Table/Table';
import { getMapEmployees } from './utils';
import { employeesColumns } from './constant';
import styles from './Employees.module.scss';

const cx = classNames.bind(styles);

const Employees = () => {
  const dispatch = useDispatch();
  const employees = useSelector(getEmployeesSelector);
  const [modal, setModal] = useState(false);
  const [{
    name, surname, email, position,
  }, setStat] = useState({
    name: '',
    surname: '',
    email: '',
    position: '',

  });
  const getEmployees = () => {
    dispatch(getEmployeesAction());
  };
  useEffect(() => {
    getEmployees();
  }, []);

  const openModal = () => {
    setModal(!modal);
  };
  const onChange = ({ currentTarget: { value, name } }) => {
    setStat((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name, surname, email, position,
    };
    dispatch(createEmployeeAction(data));
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <div className={styles.container}>
      <button onClick={openModal}>Add Modal</button>
      <div className={cx('modal', { open: modal })}>
        <form onSubmit={onSubmit}>
          <button className={styles.close} onClick={closeModal}>X</button>
          <input onChange={onChange} value={name} name="name" placeholder="Name" type="text" />
          <input onChange={onChange} value={surname} name="surname" placeholder="Surname" type="text" />
          <input onChange={onChange} value={email} name="email" placeholder="Email" type="email" />
          <input onChange={onChange} value={position} name="position" placeholder="Position" type="text" />
          <button disabled={(!name || !surname) || (!email || !position)} type="submit">Create</button>
        </form>
      </div>
      {
    employees && (
    <Table
      employeesData={getMapEmployees(employees)}
      columns={employeesColumns}
    />

    )
}
    </div>

  );
};

export default Employees;
