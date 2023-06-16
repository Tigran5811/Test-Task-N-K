import { API } from '../../api';
import { GET_EMPLOYEES_LENGTH } from '../reducers/pageEmployee';
import { deleteLoaderAction, playLoaderAction } from './loader';

export const getPageEmployeeAction = () => async (dispatch) => {
  try {
    dispatch(playLoaderAction());
    const data = await API.page.getEmployees();
    dispatch({ type: GET_EMPLOYEES_LENGTH, data });
  } catch (error) {
    alert(error.massage);
  } finally {
    dispatch(deleteLoaderAction());
  }
};
