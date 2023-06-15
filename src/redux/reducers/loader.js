export const PLAY_LOADER = 'PLAY_LOADER';
export const DELETE_LOADER = 'DELETE_LOADER';

const reducer = (state = [], { type }) => {
  switch (type) {
    case PLAY_LOADER:
      return true;
    case DELETE_LOADER:
      return false;
    default:
      return state;
  }
};
export default reducer;
