import * as types from '../ActionType';

const initialState = {
  profileData: {},
  loggedInStatus: false,
  error: null,
  userData: {},
  token: null,
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PROFILEDATA:
      return Object.assign({}, state, {
        profileData: action.payload,
        error: null,
        loggedInStatus: true,
      });
    case types.SETTOKEN:
      return Object.assign({}, state, {
        token: action.payload,
        error: null,
        loggedInStatus: true,
      });
    case types.USERDATA:
      return Object.assign({}, state, {
        userData: action.payload,
        loggedInStatus: true,
        error: null,
      });
    case types.REGISTER:
      return Object.assign({}, state, {
        IsRegistered: action.payload,
      });
    case types.ERROR:
      let errData = action.payload.message
        ? action.payload.message
        : 'Invalid Credentials. Please try again';
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
