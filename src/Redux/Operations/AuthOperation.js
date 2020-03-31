import axios from 'axios';
import {baseUrl, token} from '../../util/baseUrl';

export const loginService = data => {
  return new Promise(function(resolve, reject) {
    axios({
      method: 'post',
      url: `${baseUrl}/serviceProvider/login`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${token}`,
      },
      data: data,
    })
    .then(res => {
      if (res.status === 200) {
        resolve(res.data);
      } else {
        reject(res);
      }
    })
    .catch(err => {
      console.log("ERR - ", err)
      reject(err.response);
    });
  });
};

export const signupService = data => {
  return new Promise(function(resolve, reject) {
    axios({
      method: 'post',
      url: `${baseUrl}/serviceProvider/signUpBusiness`,
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/json',
      },
      data: data,
    })
      .then(res => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        reject(err.response);
      });
  });
};

