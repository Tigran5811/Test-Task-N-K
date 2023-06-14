import { API } from '../../api';
import { DELETE_EMPLOYEE, GET_EMPLOYEES } from '../reducers/employees';

export const getEmployeesAction = () => async (dispatch) => {
  try {
    const data = await API.employees.getEmployees();
    if (data.length > 0) {
      dispatch({ type: GET_EMPLOYEES, data });
    }
  } catch (error) {
    alert(error.massage);
  }
};

export const createEmployeeAction = (data) => async (dispatch) => {
  try {
    await API.employees.postEmployee(data);
    dispatch(getEmployeesAction());
  } catch (error) {
    alert(error.massage);
  }
};

export const deleteEmployeeAction = (id) => async (dispatch) => {
  try {
    await API.employees.deleteEmployee(id);
    dispatch({ type: DELETE_EMPLOYEE, data: id });
  } catch (error) {
    alert(error.statusText);
  }
};

export const updateEmployeeAction = (id) => async (dispatch) => {
  try {
    await API.employees.updateEmployee(id);
    dispatch(getEmployeesAction());
  } catch (error) {
    alert(error.statusText);
  }
};
