import axios from './axios';

export const getPageEmployee = async (num) => axios({
  method: 'GET',
  url: `employees?_page=${num}&_limit=10`,
});

export const getPageTasks = async (num) => axios({
  method: 'GET',
  url: `tasks?_page=${num}&_limit=10`,
});
