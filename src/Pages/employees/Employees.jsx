import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getEmployeesSelector } from '../../redux/selectors/employees';
import {
  createEmployeeAction, deleteEmployeeAction, getEmployeesAction, updateEmployeeAction,
} from '../../redux/actions/employees';
import { Table } from '../../components/Table/Table';
import { getMapEmployees } from './utils';
import { employeesColumns } from './constant';
import styles from './Employees.module.scss';
import { getEmployeesPageSelector } from '../../redux/selectors/pageEmployee';
import { getPageEmployeeAction } from '../../redux/actions/pageEmployee';
import { Pagination } from '../../components/Pagination/Pagination';
import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';

const Employees = () => {
  const dispatch = useDispatch();
  const employees = useSelector(getEmployeesSelector);
  const employeesLength = useSelector(getEmployeesPageSelector);
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
    dispatch(getEmployeesAction(1));
    dispatch(getPageEmployeeAction());
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const openModal = () => {
    setModal(true);
    setFlag(true);
  };

  const pageNext = (index) => {
    dispatch(getEmployeesAction(index));
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
    setStat({
      name: '',
      surname: '',
      email: '',
      position: '',
    });
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

  return (
    <div className={styles.container}>
      <Button onClick={openModal} text="Create Employee" />
      <Modal modal={modal}>
        <form onSubmit={onSubmit}>
          <Button type="button" close onClick={closeModal} text="X" />
          <input onChange={onChange} value={name} name="name" placeholder="Name" type="text" />
          <input onChange={onChange} value={surname} name="surname" placeholder="Surname" type="text" />
          <input onChange={onChange} value={email} name="email" placeholder="Email" type="email" />
          <input onChange={onChange} value={position} name="position" placeholder="Position" type="text" />
          {flag && <Button disabled={(!name || !surname) || (!email || !position)} type="submit" text="Create" />}
          {!flag && <Button type="button" onClick={updateEmployee} text="Update" />}
        </form>
      </Modal>

      <Table
        onEmployeeRowClick={onEmployeeRowClick}
        data={getMapEmployees(employees)}
        columns={employeesColumns}
        deleteId={deleteEmployee}
        openModalUpdate={openModalUpdate}
      />
      <Pagination pageNext={pageNext} data={employeesLength} />

    </div>

  );
};

export default Employees;
