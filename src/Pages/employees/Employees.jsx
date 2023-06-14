import React from 'react';
import { API } from '../../api';

const Employees = () => {
  const getEmployees = async () => {
    await API.employees.getEmployees();
  };

  return (
    <div>
      <button onClick={getEmployees}>ckick</button>
    </div>
  );
};

export default Employees;
