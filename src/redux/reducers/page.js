export const GET_PAGE = 'GET_PAGE';

const reducer = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_PAGE:
      return data;
    default:
      return state;
  }
};
export default reducer;
