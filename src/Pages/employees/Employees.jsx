import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesSelector } from '../../redux/selectors/employees';
import { getEmployeesAction } from '../../redux/actions/employees';

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
    <div />
  );
};

export default Employees;
