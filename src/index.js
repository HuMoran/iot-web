import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './route/router';
import * as serviceWorker from './serviceWorker';

window.myData = {
  values: [171, 18, 5, 3, 5, 1],
  data: [{
    key: 0,
    time: new Date().toLocaleString(),
    bank: '成都农商银行总行营业部',
    type: '主动上报',
    content: '市电断电',
  }, {
    key: 1,
    time: new Date().toLocaleString(),
    bank: '成都农商银行总行营业部',
    type: '运维操作',
    content: '重启NVR电源'
  }, {
    key: 2,
    time: new Date().toLocaleString(),
    bank: '成都农商银行总行营业部',
    type: '运维操作',
    content: '重启NVR电源'
  }, {
    key: 3,
    time: new Date().toLocaleString(),
    bank: '成都农商银行总行营业部',
    type: '运维操作',
    content: '重启NVR电源'
  }, {
    key: 4,
    time: new Date().toLocaleString(),
    bank: '成都农商银行总行营业部',
    type: '运维操作',
    content: '重启NVR电源'
  }, {
    key: 5,
    time: new Date().toLocaleString(),
    bank: '成都农商银行总行营业部',
    type: '运维操作',
    content: '重启报警主机'
  }],
};

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
