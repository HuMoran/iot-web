/*
 * File: \src\pages\alrmTable.js
 * Project: iot-web
 * Description:
 * Created By: Tao.Hu 2019-07-17
 * -----
 * Last Modified: 2019-07-17 09:39:56 pm
 * Modified By: Tao.Hu
 * -----
 * Copyright (c) 2019 Kideasoft Tech Co.,Ltd
 */
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

ReactDOM.render(
  <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />,
  mountNode,
);