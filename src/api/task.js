import axios from './axios';

export const getTask = async (id) => axios({
  method: 'GET',
  url: `tasks?employeeId=${id}`,
});
