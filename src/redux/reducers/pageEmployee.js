export const GET_EMPLOYEES_LENGTH = 'GET_EMPLOYEES_LENGTH';

const reducer = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_EMPLOYEES_LENGTH:
      return data;
    default:
      return state;
  }
};
export default reducer;
