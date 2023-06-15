export const GET_TASKS = 'GET_TASKS';
export const DELETE_TASK = 'DELETE_TASK';

const reducer = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_TASKS:
      return data;
    case DELETE_TASK:
      return state.filter((item) => item.id !== data);
    default:
      return state;
  }
};
export default reducer;
