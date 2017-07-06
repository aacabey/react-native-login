import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  user: null,
  error: undefined,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: undefined, loading: false };
    case types.LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', loading: false };
    default:
      return state;
  }
};