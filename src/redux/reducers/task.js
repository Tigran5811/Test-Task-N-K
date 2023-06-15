export const GET_TASK = 'GET_TASK';

const reducer = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_TASK:
      return data;
    default:
      return state;
  }
};
export default reducer;
