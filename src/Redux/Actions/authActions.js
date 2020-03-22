import {
  PROFILEDATA,
  REGISTER,
  ERROR,
  FORGET_PASSWORD,
  RESET_PASSWORD,
  USERDATA,
  SETTOKEN,
} from '../ActionType';

export function ProfileDataAction(payload) {
  return {
    type: PROFILEDATA,
    payload,
  };
}
export function TokenAction(payload) {
  return {
    type: SETTOKEN,
    payload,
  };
}
export function userDataAction(payload) {
  return {
    type: USERDATA,
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
