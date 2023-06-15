import { API } from '../../api';
import { DELETE_EMPLOYEE, GET_EMPLOYEES } from '../reducers/employees';
import { deleteLoaderAction, playLoaderAction } from './loader';

export const getEmployeesAction = () => async (dispatch) => {
  try {
    dispatch(playLoaderAction());
    const data = await API.employees.getEmployees();
    if (data.length > 0) {
      dispatch({ type: GET_EMPLOYEES, data });
    }
  } catch (error) {
    alert(error.massage);
  } finally {
    dispatch(deleteLoaderAction());
  }
};

export const createEmployeeAction = (data) => async (dispatch) => {
  try {
    dispatch(playLoaderAction());
    await API.employees.postEmployee(data);
    dispatch(getEmployeesAction());
  } catch (error) {
    alert(error.massage);
  } finally {
    dispatch(deleteLoaderAction());
  }
};

export const deleteEmployeeAction = (id) => async (dispatch) => {
  try {
    dispatch(playLoaderAction());
    await API.employees.deleteEmployee(id);
    dispatch({ type: DELETE_EMPLOYEE, data: id });
  } catch (error) {
    alert(error.statusText);
  } finally {
    dispatch(deleteLoaderAction());
  }
};

export const updateEmployeeAction = (id, data) => async (dispatch) => {
  try {
    dispatch(playLoaderAction());
    await API.employees.updateEmployee(id, data);
    dispatch(getEmployeesAction());
  } catch (error) {
    alert(error.statusText);
  } finally {
    dispatch(deleteLoaderAction());
  }
};
