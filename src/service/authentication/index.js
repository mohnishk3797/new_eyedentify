import axios from 'axios';
import {baseUrl} from '../../util/baseUrl';

export const loginService = data => {
  // console.log("$$$$$$$$$$$$$$$ - ", baseUrl)
  // const headers = {
  //   'Content-Type': 'application/json'
  // }
  // // headers['Content-Type'] = 'application/json';
  // return axios
  //   .post (`${baseUrl}/login`, data, {headers:headers})
  //   .then (function (response) {
  //     console.log("login 3 ", response)
  //     return response
  //   })
  //   .catch (function (error) {
  //     console.log(error.response)
  //     return error
  //   });

  return fetch('http://44.231.178.91:8080/eyedentifyme/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
