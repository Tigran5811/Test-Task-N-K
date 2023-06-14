import { API } from '../../api';
import { GET_EMPLOYEES } from '../reducers/employees';

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
