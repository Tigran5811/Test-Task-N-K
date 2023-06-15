import { API } from '../../api';
import { GET_EMPLOYEE } from '../reducers/employee';
import { deleteLoaderAction, playLoaderAction } from './loader';

export const getEmployeeAction = (id) => async (dispatch) => {
  try {
    dispatch(playLoaderAction());
    console.log('bb');
    const data = await API.employee.getEmployee(id);
    dispatch({ type: GET_EMPLOYEE, data });
  } catch (error) {
    alert(error.massage);
  } finally {
    dispatch(deleteLoaderAction());
  }
};
