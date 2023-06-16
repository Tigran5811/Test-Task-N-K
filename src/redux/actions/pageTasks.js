import { API } from '../../api';
import { GET_TASKS_LENGTH } from '../reducers/pageTasks';
import { deleteLoaderAction, playLoaderAction } from './loader';

export const getPageTasksAction = () => async (dispatch) => {
  try {
    dispatch(playLoaderAction());
    const data = await API.page.getTasks();
    dispatch({ type: GET_TASKS_LENGTH, data });
  } catch (error) {
    alert(error.massage);
  } finally {
    dispatch(deleteLoaderAction());
  }
};
