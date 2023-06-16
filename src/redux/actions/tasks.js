import { API } from '../../api';
import { DELETE_TASK, FILTER_TASK, GET_TASKS } from '../reducers/tasks';
import { deleteLoaderAction, playLoaderAction } from './loader';
import { getPageTasksAction } from './pageTasks';

export const getTasksAction = (num) => async (dispatch) => {
  try {
    dispatch(playLoaderAction());
    const data = await API.tasks.getPageTasks(num);
    dispatch(getPageTasksAction());
    if (data.length > 0) {
      dispatch({ type: GET_TASKS, data });
    }
  } catch (error) {
    alert(error.massage);
  } finally {
    dispatch(deleteLoaderAction());
  }
};

export const createTaskAction = (data) => async (dispatch) => {
  try {
    dispatch(playLoaderAction());
    await API.tasks.postTask(data);
    dispatch(getPageTasksAction());
    dispatch(getTasksAction());
  } catch (error) {
    alert(error.massage);
  } finally {
    dispatch(deleteLoaderAction());
  }
};

export const deleteTaskAction = (id) => async (dispatch) => {
  try {
    dispatch(playLoaderAction());
    await API.tasks.deleteTask(id);
    dispatch(getPageTasksAction());
    dispatch({ type: DELETE_TASK, data: id });
    dispatch(getTasksAction());
  } catch (error) {
    alert(error.statusText);
  } finally {
    dispatch(deleteLoaderAction());
  }
};

export const updateTaskAction = (id, data) => async (dispatch) => {
  try {
    dispatch(playLoaderAction());
    await API.tasks.updateTask(id, data);
    dispatch(getPageTasksAction());
    dispatch(getTasksAction());
  } catch (error) {
    alert(error.statusText);
  } finally {
    dispatch(deleteLoaderAction());
  }
};

export const filterTaskAction = (
  nameLike,
  descriptionLike,
  startDates,
  endDates,
) => async (dispatch) => {
  try {
    dispatch(playLoaderAction());
    const data = await API.tasks.searchTask(nameLike, descriptionLike, startDates, endDates);
    dispatch(getPageTasksAction());
    dispatch({ type: FILTER_TASK, data });
  } catch (error) {
    alert(error.statusText);
  } finally {
    dispatch(deleteLoaderAction());
  }
};
