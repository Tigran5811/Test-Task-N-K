export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

const reducer = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_EMPLOYEES:
      return data;
    case DELETE_EMPLOYEE:
      return state.filter((item) => item.id !== data);
    default:
      return state;
  }
};
export default reducer;
