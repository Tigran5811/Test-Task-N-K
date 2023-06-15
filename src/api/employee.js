import axios from './axios';

export const getEmployee = async (id) => axios({
  method: 'GET',
  url: `employees/${id}`,
});
