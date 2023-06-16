import axios from './axios';

export const getPageTasks = async (num) => axios({
  method: 'GET',
  url: `tasks?_page=${num}&_limit=10`,
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

export const searchTask = async (nameLike = '', descriptionLike = '', startData = '', endDate = '') => axios({
  method: 'get',
  url: `tasks?name_like=${nameLike}&description_like=${descriptionLike}${startData}${endDate}`,

});
