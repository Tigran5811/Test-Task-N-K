import { DELETE_LOADER, PLAY_LOADER } from '../reducers/loader';

export const playLoaderAction = () => async (dispatch) => dispatch({ type: PLAY_LOADER });

export const deleteLoaderAction = () => async (dispatch) => dispatch({ type: DELETE_LOADER });
