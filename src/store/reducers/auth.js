import * as actionsType from '../action-creators/action-types'
import { updateObject } from '../../services/utility'


const initialState = {
    token: null,
    user: null,
    type: null,
    error: null,
    loading: false,
  
}

const authStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}
const authSuccess = (state, action) => {
    return updateObject(state, {
        user: action.user,
        token: action.token,
        type: action.role,
        loading: false,
        error: null
    })
}
const authFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}
const authLogout = (state, action) => {
    return updateObject(state, { user: null, token: null, type: null });
};
const forgotSuccess = (state, action) => {
    return updateObject(state)
}

const newPassSuccess = (state, action) => {
    return updateObject(state, {
        key: action.key,
        password: action.password,
        confirmPassword: action.confirmPassword,
        loading: false,
        error: null
    })
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsType.AUTH_START: return authStart(state, action)
        case actionsType.AUTH_SUCCESS: return authSuccess(state, action)
        case actionsType.AUTH_FAIL: return authFail(state, action)
        case actionsType.AUTH_LOGOUT: return authLogout(state, action)
        case actionsType.FORGOT_PASSWORD: return forgotSuccess(state, action)
        case actionsType.NEW_PASSWORD: return newPassSuccess(state, action)
        default: return state
    }
}
export default reducer
