export const GET_EMPLOYEES = 'GET_EMPLOYEES';

const reducer = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_EMPLOYEES:
      return data;
    default:
      return state;
  }
};
export default reducer;
