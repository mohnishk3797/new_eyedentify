import {Buffer} from 'buffer';
const username = 'eyedentifyme';
const password = 'eyedentifyme@qwer';
export const baseUrl = 'http://44.231.178.91:8080/eyedentifyme';
export const token = Buffer.from(`${username}:${password}`, 'utf8').toString(
  'base64',
);
