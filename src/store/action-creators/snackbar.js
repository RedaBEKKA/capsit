import * as actionType from './action-types'


export const openSnackBar = (message, snakbarType) => {
    return dispatch => {
        dispatch({
            type: actionType.SNACKBAR_SUCCESS,
            message,
            snakbarType
        });
    };
}

export const closSnackBar = () => {
    return dispatch => {
        dispatch({
            type: actionType.SNACKBAR_CLEAR
        })
    };
}
