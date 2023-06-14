import axios from './axios';

export const getEmployees = async () => axios({
  method: 'GET',
  url: 'employees',
});
