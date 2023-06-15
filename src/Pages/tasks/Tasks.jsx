import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { useDispatch, useSelector } from 'react-redux';
import styles from './Tasks.module.scss';
import { getEmployeesSelector } from '../../redux/selectors/employees';
import { Table } from '../../components/Table/Table';
import { tasksColumns } from './constant';
import { getMapTasks } from './utils';
import { getTasksSelector } from '../../redux/selectors/tasks';
import {
  createTaskAction, deleteTaskAction, getTasksAction, updateTaskAction,
} from '../../redux/actions/tasks';
import { Search } from '../../components/Search/Search';
import { getPageTasksAction } from '../../redux/actions/page';
import { Pagination } from '../../components/Pagination/Pagination';
import { getMapEmployees } from '../employees/utils';
import { getEmployeesPageSelector } from '../../redux/selectors/page';

const cx = classNames.bind(styles);

const Tasks = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [option, setOption] = useState(false);
  const [id, setId] = useState(null);
  const employees = useSelector(getEmployeesSelector);
  const tasks = useSelector(getTasksSelector);
  const [flag, setFlag] = useState(true);
  const [search, setSearch] = useState(false);
  const page = useSelector(getEmployeesPageSelector);

  const [{
    name, description, startDate, endDate, employeeId,
  }, setStat] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    employeeId: '',

  });
  const getTasks = () => {
    dispatch(getTasksAction());
    dispatch(getPageTasksAction(1));
  };

  useEffect(() => {
    getTasks();
  }, []);

  const onChange = ({ currentTarget: { value, name } }) => {
    setStat((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name, description, startDate, endDate, employeeId: id,
    };
    dispatch(createTaskAction(data));
    setModal(false);
  };

  const closeModal = () => {
    setModal(false);
    setStat({
      name: '',
      description: '',
      startDate: '',
      endDate: '',
    });
    setId(null);
  };

  const openModal = () => {
    setModal(true);
    setFlag(true);
  };

  const openOptions = () => {
    setOption(!option);
  };
  const openSearch = () => {
    setSearch(!search);
  };

  const selectId = (id) => {
    setId(id);
    setOption(false);
  };

  const deleteTask = (id) => {
    dispatch(deleteTaskAction(id));
  };

  const openModalUpdate = (item) => {
    setModal(true);
    setId(item.col5);
    setFlag(false);
    setStat({
      name: item.col1,
      description: item.col2,
      startDate: item.col3,
      endDate: item.col4,
      employeeId: item.col5,

    });
  };

  const updateEmployee = () => {
    const data = {
      name, description, startDate, endDate, employeeId,
    };
    dispatch(updateTaskAction(id, data));
    setModal(false);
    setId(null);

    setStat({
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      employeeId: '',
    });
  };
  const pageNext = (index) => {
    dispatch(getPageTasksAction(index));
  };
  return (
    <div className={styles.container}>
      <button onClick={openSearch}>Open Search</button>
      <button onClick={getTasks}>reset filter</button>
      <Search search={search} />
      <button onClick={openModal}>Create Task</button>

      <div className={cx('modal', { open: modal })}>
        <form onSubmit={onSubmit}>
          <button type="button" className={styles.close} onClick={closeModal}>X</button>
          <input onChange={onChange} value={name} name="name" placeholder="Name" type="text" />
          <input onChange={onChange} value={description} name="description" placeholder="Description" type="text" />
          <input onChange={onChange} value={startDate} name="startDate" placeholder="Start Date" type="date" />
          <input onChange={onChange} value={endDate} name="endDate" placeholder="End Date" type="date" />
          {id && <input placeholder={id} type="text" />}
          <div className={cx('option', { open_option: option })}>
            <div className={styles.scroll}>
              {
                employees.map((item, i) => (
                  <div
                    role="button"
                    onClick={() => {
                      selectId(item.id);
                    }}
                    className={styles.container_employees}
                    key={i}
                  >
                    <div>{item.name}</div>
                    <div>{item.surname}</div>
                    <div>{item.email}</div>
                    <div>{item.position}</div>
                    <div>{item.id}</div>
                  </div>
                ))
              }
            </div>
          </div>
          <button onClick={openOptions} type="button">select options</button>
          {flag && <button disabled={(!name || !description) || (!startDate || !endDate)} type="submit">Create</button>}
          {!flag && <button type="button" onClick={updateEmployee}>Update</button>}

        </form>
      </div>
      <Table
        page={getMapEmployees(page)}
        columns={tasksColumns}
        deleteId={deleteTask}
        openModalUpdate={openModalUpdate}
      />
      <Pagination pageNext={pageNext} data={getMapTasks(tasks)} />

    </div>
  );
};

export default Tasks;
