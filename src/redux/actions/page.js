import { API } from '../../api';
import { GET_PAGE } from '../reducers/page';

export const getPageEmployeeAction = (num) => async (dispatch) => {
  const data = await API.page.getPageEmployee(num);
  dispatch({ type: GET_PAGE, data });
};

export const getPageTasksAction = (num) => async (dispatch) => {
  const data = await API.page.getPageTasks(num);
  dispatch({ type: GET_PAGE, data });
};
