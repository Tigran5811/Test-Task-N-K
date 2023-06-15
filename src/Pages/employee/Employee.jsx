import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { parse } from 'qs';
import styles from './Employee.module.scss';
import { getEmployeeAction } from '../../redux/actions/employee';
import { getEmployeeSelector } from '../../redux/selectors/employee';
import { getTaskSelector } from '../../redux/selectors/task';
import { getTaskAction } from '../../redux/actions/task';

export const Employee = () => {
  const location = useLocation();
  const { id } = parse(location.search, { ignoreQueryPrefix: true });
  const employee = useSelector(getEmployeeSelector);
  const task = useSelector(getTaskSelector);
  const dispatch = useDispatch();

  const getEmployee = () => {
    dispatch(getEmployeeAction(id));
    dispatch(getTaskAction(id));
  };
  useEffect(() => {
    getEmployee(id);
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {' '}
        User
        <h2>
          Name -
          {' '}
          {employee?.name}
        </h2>
        <h2>
          Surname -
          {' '}
          {employee?.surname}
        </h2>
        <h2>
          Position -
          {' '}
          {employee?.position}
        </h2>
      </div>
      <div className={styles.box}>
        {' '}
        Task
        {task.map((item, index) => (
          <div key={index}>
            {index + 1}
            <div>
              name -
              {' '}
              {item.name}
            </div>
            <div>
              description -
              {' '}
              {item.description}
            </div>
            <div>
              startDate -
              {' '}
              {item.startDate}
            </div>
            <div>
              endDate -
              {' '}
              {item.endDate}
            </div>
            <div>
              id -
              {' '}
              {item.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
