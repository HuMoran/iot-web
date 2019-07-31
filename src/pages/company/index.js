/**
 * File: index.js
 * Project: iot-web
 * Created Date: Friday, July 19th 2019, 10:07:32 pm
 * Author: Tao Hu htax2013@gmail.com
 * -----
 * Last Modified: Fri Jul 26 2019
 * Modified By: Tao Hu
 * -----
 * Copyright (c) 2019 Kideasoft Tech Co.,Ltd.
 */

import React from 'react';
import { Table, Row, Card, Col, Icon, Statistic } from 'antd';

const columns = [{
    title: '网点',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '负责人',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: '联系电话',
    key: 'phone',
    dataIndex: 'phone',
  }
];

const data = [
  {
    key: '1',
    name: '总行营业部',
    address: '成都市武侯区科华中路88号',
    contact: '张主任',
    phone: '18688831586',
  },
  {
    key: '2',
    name: '武侯支行',
    address: '成都市武侯区二环路南一段16号',
    contact: '张主任',
    phone: '18688831586',
  },
  {
    key: '3',
    name: '高新支行',
    address: '成都市高新区府城大道西段455号',
    contact: '张主任',
    phone: '18688831586',
  },
  {
    key: '4',
    name: '金牛支行',
    address: '成都市金牛区一环路西三段184号',
    contact: '张主任',
    phone: '18688831586',
  },
  {
    key: '5',
    name: '锦江支行',
    address: '成都市锦江区经天路2号1栋1楼8号',
    contact: '张主任',
    phone: '18688831586',
  },
];

class Report extends React.Component {
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

export default Report;

