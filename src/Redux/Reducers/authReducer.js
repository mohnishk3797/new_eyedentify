import * as types from '../ActionType';

const initialState = {
  data: {},
  loggedInStatus: false,
  error: null,
  userData: {},
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return Object.assign({}, state, {
        data: action.payload,
        error: null,
        loggedInStatus: true,
      });
    case types.USERDATA:
      return Object.assign({}, state, {
        userData: action.payload,
      });
    case types.REGISTER:
      return Object.assign({}, state, {
        IsRegistered: action.payload,
      });
    case types.ERROR:
      let errData = action.payload.message
        ? action.payload.message
        : action.payload.detail;
      return Object.assign({}, state, {
        error: errData,
        loggedInStatus: false,
        data: {},
      });
    default:
      return state;
  }
};
export {AuthReducer};
