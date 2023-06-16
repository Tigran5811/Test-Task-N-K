import axios from './axios';

export const getEmployees = async () => axios({
  method: 'GET',
  url: 'employees',
});

export const getTasks = async () => axios({
  method: 'GET',
  url: 'tasks',
});
