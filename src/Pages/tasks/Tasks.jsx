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
import { getPageTasksAction } from '../../redux/actions/pageTasks';
import { Pagination } from '../../components/Pagination/Pagination';
import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';
import { getTasksPageSelector } from '../../redux/selectors/pageTasks';

const cx = classNames.bind(styles);

const Tasks = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [option, setOption] = useState(false);
  const [id, setId] = useState(null);
  const employees = useSelector(getEmployeesSelector);
  const tasks = useSelector(getTasksSelector);
  const [flag, setFlag] = useState(true);
  const tasksLength = useSelector(getTasksPageSelector);
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
    dispatch(getTasksAction(1));
    dispatch(getPageTasksAction);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const pageNext = (index) => {
    dispatch(getTasksAction(index));
  };

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
    setStat({
      name: '',
      description: '',
      startDate: '',
      endDate: '',
    });
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

  return (
    <div className={styles.container}>
      <Button className="primary" onClick={getTasks} text="Reset filter" />
      <Search />
      <Button onClick={openModal} className="primary" text="Create Task" />
      <Modal modal={modal}>
        <form onSubmit={onSubmit}>
          <Button type="button" close onClick={closeModal} text="X" />
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
          <Button className="primary" onClick={openOptions} type="button" text="select options" />
          {flag && <Button disabled={(!name || !description) || (!startDate || !endDate)} type="submit" text="Create" />}
          {!flag && <Button type="button" onClick={updateEmployee} text="Update" />}
        </form>
      </Modal>
      <Table
        data={getMapTasks(tasks)}
        columns={tasksColumns}
        deleteId={deleteTask}
        openModalUpdate={openModalUpdate}
      />
      <Pagination pageNext={pageNext} data={tasksLength} />
    </div>
  );
};

export default Tasks;
