import axios from './axios';

export const getPageEmployee = async (num) => axios({
  method: 'GET',
  url: `employees?_page=${num}&_limit=10`,
});

export const postEmployee = async (data) => axios({
  method: 'post',
  url: 'employees',
  data,
});

export const deleteEmployee = async (id) => axios({
  method: 'delete',
  url: `employees/${id}`,
});

export const updateEmployee = async (id, data) => axios({
  method: 'put',
  url: `employees/${id}`,
  data,

});
