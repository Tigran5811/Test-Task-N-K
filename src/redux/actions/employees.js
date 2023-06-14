import { API } from '../../api';
import { GET_EMPLOYEES } from '../reducers/employees';

export const getEmployeesAction = () => async (dispatch) => {
  try {
    const data = await API.employees.getEmployees();
    console.log(data);
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
