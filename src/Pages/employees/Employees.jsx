import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesSelector } from '../../redux/selectors/employees';
import { getEmployeesAction } from '../../redux/actions/employees';
import { Table } from '../../components/Table/Table';
import { getMapEmployees } from './utils';
import { employeesColumns } from './constant';

const Employees = () => {
  const dispatch = useDispatch();
  const employees = useSelector(getEmployeesSelector);

  const getEmployees = () => {
    dispatch(getEmployeesAction());
  };
  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div>
      {employees && (
        <Table
          employeesData={getMapEmployees(employees)}
          columns={employeesColumns}
        />
      )}
    </div>

  );
};

export default Employees;
