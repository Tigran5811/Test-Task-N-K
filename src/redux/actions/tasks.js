import { API } from '../../api';
import { DELETE_TASK, GET_TASKS } from '../reducers/tasks';

export const getTasksAction = () => async (dispatch) => {
  try {
    const data = await API.tasks.getTasks();
    if (data.length > 0) {
      dispatch({ type: GET_TASKS, data });
    }
  } catch (error) {
    alert(error.massage);
  }
};

export const createTaskAction = (data) => async (dispatch) => {
  try {
    console.log(data);
    await API.tasks.postTask(data);
    dispatch(getTasksAction());
  } catch (error) {
    alert(error.massage);
  }
};

export const deleteTaskAction = (id) => async (dispatch) => {
  try {
    await API.tasks.deleteTask(id);
    dispatch({ type: DELETE_TASK, data: id });
  } catch (error) {
    alert(error.statusText);
  }
};

export const updateTaskAction = (id, data) => async (dispatch) => {
  try {
    await API.tasks.updateTask(id, data);
    dispatch(getTasksAction());
  } catch (error) {
    alert(error.statusText);
  }
};
