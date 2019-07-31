/**
 * File: index.js
 * Project: iot-web
 * Created Date: Friday, July 19th 2019, 10:07:32 pm
 * Author: Tao Hu htax2013@gmail.com
 * -----
 * Last Modified: Thu Jul 25 2019
 * Modified By: Tao Hu
 * -----
 * Copyright (c) 2019 Kideasoft Tech Co.,Ltd.
 */

import React from 'react';
import { Table, Switch, Card, Icon, Divider } from 'antd';

const columns = [{
    title: '序号',
    dataIndex: 'no',
    key: 'no',
  }, {
    title: '操作员',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
  },
  {
    title: '内容',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: '登录IP',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: '操作时间',
    dataIndex: 'time',
    key: 'time',
  },
];

const data = [
  {
    key: '1',
    no: '1',
    name: '温经理',
    action: '登录',
    content: '登录系统',
    ip: '171.209.159.245',
    time: '2019-07-24 22:40:30',
  },
  {
    key: '2',
    no: '2',
    name: '温经理',
    action: '登录',
    content: '登录系统',
    ip: '171.209.159.245',
    time: '2019-07-24 22:40:30',  },
  {
    key: '3',
    no: '3',
    name: '温经理',
    action: '登录',
    content: '登录系统',
    ip: '171.209.159.245',
    time: '2019-07-24 22:40:30',
  },
  {
    key: '4',
    no: '4',
    name: '温经理',
    action: '登录',
    content: '登录系统',
    ip: '171.209.159.245',
    time: '2019-07-24 22:40:30',
  },
  {
    key: '5',
    no: '5',
    name: '温经理',
    action: '登录',
    content: '登录系统',
    ip: '171.209.159.245',
    time: '2019-07-24 22:40:30',
  },
  {
    key: '6',
    no: '6',
    name: '温经理',
    action: '登录',
    content: '登录系统',
    ip: '171.209.159.245',
    time: '2019-07-24 22:40:30',
  },
  {
    key: '7',
    no: '7',
    name: '温经理',
    action: '登录',
    content: '登录系统',
    ip: '171.209.159.245',
    time: '2019-07-24 22:40:30',
  },
  {
    key: '8',
    no: '8',
    name: '温经理',
    action: '登录',
    content: '登录系统',
    ip: '171.209.159.245',
    time: '2019-07-24 22:40:30',
  },
  {
    key: '9',
    no: '9',
    name: '温经理',
    action: '登录',
    content: '登录系统',
    ip: '171.209.159.245',
    time: '2019-07-24 22:40:30',
  },
  {
    key: '10',
    no: '10',
    name: '温经理',
    action: '登录',
    content: '登录系统',
    ip: '171.209.159.245',
    time: '2019-07-24 22:40:30',
  },
];

class Log extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Card style={{margin: '16px 0px'}}>
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    );
  }
}

export default Log;

