export const GET_TASKS = 'GET_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const FILTER_TASK = 'FILTER_TASK';

const reducer = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_TASKS:
      return data;
    case DELETE_TASK:
      return state.filter((item) => item.id !== data);
    case FILTER_TASK:
      return data;
    default:
      return state;
  }
};
export default reducer;
