import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { getEmployeesSelector } from '../../redux/selectors/employees';
import {
  createEmployeeAction, deleteEmployeeAction, getEmployeesAction, updateEmployeeAction,
} from '../../redux/actions/employees';
import { Table } from '../../components/Table/Table';
import { getMapEmployees } from './utils';
import { employeesColumns } from './constant';
import styles from './Employees.module.scss';
import { getEmployeesPageSelector } from '../../redux/selectors/page';
import { getPageEmployeeAction } from '../../redux/actions/page';
import { Pagination } from '../../components/Pagination/Pagination';

const cx = classNames.bind(styles);

const Employees = () => {
  const dispatch = useDispatch();
  const employees = useSelector(getEmployeesSelector);
  const page = useSelector(getEmployeesPageSelector);
  const [modal, setModal] = useState(false);
  const [flag, setFlag] = useState(true);
  const [id, setId] = useState(null);
  const navigate = useNavigate();

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
    dispatch(getPageEmployeeAction(1));
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const openModal = () => {
    setModal(true);
    setFlag(true);
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
    setModal(false);
  };

  const closeModal = () => {
    setModal(false);
    setStat({
      name: '',
      surname: '',
      email: '',
      position: '',
    });
  };

  const deleteEmployee = (id) => {
    dispatch(deleteEmployeeAction(id));
  };

  const openModalUpdate = (item) => {
    setModal(true);
    setId(item.col5);
    setFlag(false);
    setStat({
      name: item.col1,
      surname: item.col2,
      email: item.col3,
      position: item.col4,
    });
  };

  const updateEmployee = () => {
    const data = {
      name, surname, email, position,
    };
    dispatch(updateEmployeeAction(id, data));
    setModal(false);
    setStat({
      name: '',
      surname: '',
      email: '',
      position: '',
    });
  };
  const onEmployeeRowClick = (id) => {
    navigate(`/employee?id=${id}`);
  };
  const pageNext = (index) => {
    dispatch(getPageEmployeeAction(index));
  };

  return (
    <div className={styles.container}>
      <button className="primary" onClick={openModal}>Create Employee</button>
      <div className={cx('modal', { open: modal })}>
        <form onSubmit={onSubmit}>
          <button type="button" className={styles.close} onClick={closeModal}>X</button>
          <input onChange={onChange} value={name} name="name" placeholder="Name" type="text" />
          <input onChange={onChange} value={surname} name="surname" placeholder="Surname" type="text" />
          <input onChange={onChange} value={email} name="email" placeholder="Email" type="email" />
          <input onChange={onChange} value={position} name="position" placeholder="Position" type="text" />
          {flag && <button disabled={(!name || !surname) || (!email || !position)} type="submit">Create</button>}
          {!flag && <button type="button" onClick={updateEmployee}>Update</button>}

        </form>
      </div>

      <Table
        onEmployeeRowClick={onEmployeeRowClick}
        page={getMapEmployees(page)}
        columns={employeesColumns}
        deleteId={deleteEmployee}
        openModalUpdate={openModalUpdate}
      />
      <Pagination pageNext={pageNext} data={getMapEmployees(employees)} />

    </div>

  );
};

export default Employees;
