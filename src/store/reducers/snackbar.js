import * as actionType from '../action-creators/action-types';
import { updateObject } from '../../services/utility';

const initialState = {
    openSnackbar: false,
    message: '',
    snakbarType: ''

};

export const openSnackBar = (state, action) => {
    return updateObject(state, { message: action.message, openSnackbar: true, snakbarType: action.snakbarType })
};

export const closSnackBar = (state, action) => {
    return updateObject(state, {
        openSnackbar: false,
        message: '',
        snakbarType: ''
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SNACKBAR_SUCCESS: return openSnackBar(state, action);
        case actionType.SNACKBAR_CLEAR: return closSnackBar(state, action);

        default:
            return state;
    }
};

export default reducer;