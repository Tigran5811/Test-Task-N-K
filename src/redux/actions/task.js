import { API } from '../../api';
import { GET_TASK } from '../reducers/task';
import { deleteLoaderAction, playLoaderAction } from './loader';

export const getTaskAction = (id) => async (dispatch) => {
  try {
    dispatch(playLoaderAction());
    const data = await API.task.getTask(id);
    dispatch({ type: GET_TASK, data });
  } catch (error) {
    alert(error.massage);
  } finally {
    dispatch(deleteLoaderAction());
  }
};
