export const GET_TASKS_LENGTH = 'GET_TASKS_LENGTH';

const reducer = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_TASKS_LENGTH:
      return data;
    default:
      return state;
  }
};
export default reducer;
