import axios from 'axios';
import {baseUrl, token} from '../../util/baseUrl';

export const loginService = data => {
  return new Promise(function(resolve, reject) {
    axios({
      method: 'post',
      url: `${baseUrl}/login`,
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
