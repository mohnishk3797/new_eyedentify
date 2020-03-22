import {LOGIN, REGISTER} from '../actionTypes';

export function ProfileData(payload) {
  return {
    type: USERDATA,
    payload,
  };
}
export function LoginAction(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function RegisterAction(payload) {
  return {
    type: REGISTER,
    payload,
  };
}

export function ErrorAction(payload) {
  return {
    type: ERROR,
    payload,
  };
}

export function ForgetPassAction(payload) {
  return {
    type: FORGET_PASSWORD,
    payload,
  };
}
