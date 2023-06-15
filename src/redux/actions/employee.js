import { API } from '../../api';
import { GET_EMPLOYEE } from '../reducers/employee';

export const getEmployeeAction = (id) => async (dispatch) => {
  try {
    const data = await API.employee.getEmployee(id);
    dispatch({ type: GET_EMPLOYEE, data });
  } catch (error) {
    alert(error.massage);
  }
};
