import * as actionTypes from './action-types'
import axios from 'axios'
import { storageSetItem, storageGetItem, storageRemoveItem, } from '../../services/Storage'
import i18n from 'i18next';
import {openSnackBar} from './snackbar'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (user, token, role) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        user,
        token,
        role
    }
}
export const authFail = (err) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: err
    }
}
export const logout = () => {
    storageRemoveItem('acces_token');
    storageRemoveItem('user');
    storageRemoveItem('user_role');

    return {
        type: actionTypes.AUTH_LOGOUT

    }
}

export const forgotSuccess = (email) => {
    return {
        type: actionTypes.FORGOT_PASSWORD,
        email: email
    }
}

export const newPassSuccess = (key, password, confirmPassword) => {
    return {
        type: actionTypes.NEW_PASSWORD,
        key: key,
        password: password,
        confirmPassword: confirmPassword
    }
}


export const auth = (identifiant) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('https://run.mocky.io/v3/04564e78-f928-4f1c-ab05-31661d842b07', { identifiant })
            .then(res => {
                // console.log(res)
                const { token, user } = res.data
                storageSetItem('access_token', token)
                storageSetItem('user', user)
                storageSetItem('user_role', user.type)
                dispatch(authSuccess(user, token, user.type))
            })
            .catch(err => {
                dispatch(authFail(err))
                
            })
    }


}

export const authCheckState = () => {
    return dispatch => {
        const token = storageGetItem('access_token')
        if (!token) {
            dispatch(logout());
        } else {

            const user = storageGetItem('user');
            const role = storageGetItem('user_role');
            dispatch(authSuccess(user, token, role));

        }

    }
}


export const forgotPassword = (email) => {
    return dispatch => {


        axios.post('https://run.mocky.io/v3/3e7f9bc9-5372-4dd6-b113-f9b6b7efee03', email)
            .then(res => {
                console.log('res', res.data)
                dispatch(openSnackBar(i18n.t('snackbarSuccess', { ns: 'login'}), 'success'));
                //navigate('/new_password')

                //dispatch(forgotSuccess(key))
             

            })

    }
}

export const newPassword = (password, confirmPassword, navigate) => {
    return dispatch => {


        axios.post('https://run.mocky.io/v3/22dfe59b-6ac0-4a70-a8fd-895a026f5bd9', password, confirmPassword)
            .then(res => {
                console.log('res', res.data)
                const { key, password, confirmPassword } = res.data.user

                navigate('/')

                dispatch(newPassSuccess(key, password, confirmPassword))


            })

    }
}
