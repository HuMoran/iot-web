/**
 * File: bankConfig.js
 * Project: iot-web
 * Created Date: Saturday, July 20th 2019, 6:16:12 pm
 * Author: Tao Hu htax2013@gmail.com
 * -----
 * Last Modified: Thu Jul 25 2019
 * Modified By: Tao Hu
 * -----
 * Copyright (c) 2019 Kideasoft Tech Co.,Ltd.
 */

const bank1State = [
  {
    id: '5',
    title: '市电状态',
    state: 1,
    stateText: ['断电', '正常'],
  }, {
    id: '6',
    title: 'UPS状态',
    state: 1,
    stateText: ['断电', '正常'],
  }, {
    id: '7',
    title: '机房温度',
    state: 1,
    stateText: ['46°C', '26°C'],
  }, {
    id: '8',
    title: '机房湿度',
    state: 1,
    stateText: ['60°C', '30%'],
  },  {
    id: '9',
    title: '渗水监测',
    state: 1,
    stateText: ['渗水', '正常'],
  }
];

const bank1Dev = [
  {
    id: '1',
    name: '自助网点报警主机',
    isOpen: true,
  }, {
    id: '2',
    name: '营业网点报警主机',
    isOpen: true,
  }, {
    id: '3',
    name: '金库门禁主机',
    isOpen: true,
  }, {
    id: '4',
    name: '自助网点门禁主机',
    isOpen: true,
  },  {
    id: '5',
    name: '营业网点门禁主机',
    isOpen: true,
  },  {
    id: '6',
    name: 'NVR主机',
    isOpen: true,
  }
];
const bank2Dev = [
  {
    id: '1',
    name: '自助网点报警主机',
    isOpen: true,
  }, {
    id: '2',
    name: '营业网点报警主机',
    isOpen: true,
  }, {
    id: '3',
    name: '现金区门禁主机',
    isOpen: true,
  }, {
    id: '4',
    name: '自助网点门禁主机',
    isOpen: true,
  },  {
    id: '5',
    name: '营业网点门禁主机',
    isOpen: true,
  },  {
    id: '6',
    name: 'NVR主机',
    isOpen: true,
  }
];

const bankConfig = [
  {
    id: '1',
    title: '总行营业部',
    status: bank1State,
    devices: bank1Dev,
  }, {
    id: '2',
    title: '武侯支行',
    status: bank1State,
    devices: bank2Dev,
  }
];

export default bankConfig;
