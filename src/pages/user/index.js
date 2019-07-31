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
import { Table, Card, Icon, Divider } from 'antd';

const columns = [{
    title: '序号',
    dataIndex: 'no',
    key: 'no',
  }, {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Divider type="vertical" />
        <a href="javascript:;"><Icon type="edit" style={{color: '#595959'}} /></a>
        <Divider type="vertical" />
        <a href="javascript:;"><Icon type="delete" style={{color: 'red'}} /></a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    no: '1',
    name: '张主任',
    phone: '18688831586',
  },
  {
    key: '2',
    no: '2',
    name: '李经理',
    phone: '18688831586',
  },
  {
    key: '3',
    no: '3',
    name: '王队长',
    phone: '18688831586',
  },
  {
    key: '4',
    no: '4',
    name: '温经理',
    phone: '18688831586',
  }
];

class User extends React.Component {
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

export default User;

