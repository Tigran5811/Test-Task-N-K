import { API } from '../../api';
import { GET_TASK } from '../reducers/task';

export const getTaskAction = (id) => async (dispatch) => {
  try {
    const data = await API.task.getTask(id);
    dispatch({ type: GET_TASK, data });
  } catch (error) {
    alert(error.massage);
  }
};
