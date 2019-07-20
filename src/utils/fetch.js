/**
 * File: fetch.js
 * Project: iot-web
 * Created Date: Saturday, July 20th 2019, 5:16:49 pm
 * Author: Tao Hu htax2013@gmail.com
 * -----
 * Last Modified: Sat Jul 20 2019
 * Modified By: Tao Hu
 * -----
 * Copyright (c) 2019 Kideasoft Tech Co.,Ltd.
 */

//全局路径
// const server = 'http://192.168.2.105:4000';
const server = 'http://47.75.3.68:4000';

//解析json
function parseJSON(response){
  return response.json()
}
//检查请求状态
function checkStatus(response){
  if(response.status >= 200 && response.status < 500){
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

export function sendCommand(id, action) {
  const options = {
    method: 'post',
    // mode: 'cors',
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify({ id, action }),
  }
  return fetch(`${server}/action`, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err=>({err}));
}

export function getStatus() {
  const options = {
    method: 'get',
  }
  return fetch(`${server}/status`, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err=>({err}));
}