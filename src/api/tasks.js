import axios from './axios';

export const getTasks = async () => axios({
  method: 'GET',
  url: 'tasks',
});

export const postTask = async (data) => axios({
  method: 'post',
  url: 'tasks',
  data,
});

export const deleteTask = async (id) => axios({
  method: 'delete',
  url: `tasks/${id}`,
});

export const updateTask = async (id, data) => axios({
  method: 'put',
  url: `tasks/${id}`,
  data,

});
