export const GET_EMPLOYEE = 'GET_EMPLOYEE';

const reducer = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_EMPLOYEE:
      return data;
    default:
      return state;
  }
};
export default reducer;
