import axios from './axios';

export const getEmployees = async () => axios({
  method: 'GET',
  url: 'employees',
});

export const postEmployee = async (data) => axios({
  method: 'post',
  url: 'employees',
  data,
});
