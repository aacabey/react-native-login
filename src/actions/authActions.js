import * as types from './actionTypes';
import { UserService } from '../services/userService';

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: types.LOGIN_USER });

        return UserService.loginUser(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                loginUserFail(dispatch);
            });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: types.LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: types.LOGIN_USER_SUCCESS,
        payload: user
    });
};
