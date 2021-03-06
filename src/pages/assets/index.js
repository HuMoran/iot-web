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
import { Table, Divider, Tag, Card, Switch, Icon } from 'antd';

const columns = [{
    title: '设备名称',
    dataIndex: 'devName',
    key: 'devName',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: '设备类型',
    dataIndex: 'devType',
    key: 'devType',
  },
  {
    title: '所属网点',
    dataIndex: 'bank',
    key: 'bank',
  },
  {
    title: '设备品牌',
    key: 'brand',
    dataIndex: 'brand',
    render: brand => (
      <span>
        <Tag color={brand.length > 5 ? 'geekblue' : 'green'}>{brand}</Tag>
      </span>
    ),
  },
  {
    title: '运维公司',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: '负责人',
    dataIndex: 'contactName',
    key: 'contactName',
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
        {/* <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked /> */}
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
    devName: '自助网点报警主机',
    devType: '报警',
    bank: '总行营业部',
    brand: '亚光',
    company: '成都科旭电子有限公司',
    contactName: '李经理',
    phone: '13988888888',
  },
  {
    key: '2',
    devName: '营业网点报警主机',
    devType: '报警',
    bank: '总行营业部',
    brand: '亚光',
    company: '成都科旭电子有限公司',
    contactName: '李经理',
    phone: '13988888888',
  },
  {
    key: '3',
    devName: '金库门禁主机',
    devType: '门禁',
    bank: '总行营业部',
    brand: '讯美',
    company: '成都科旭电子有限公司',
    contactName: '李经理',
    phone: '13988888888',
  },
  {
    key: '4',
    devName: '自助网点门禁主机',
    devType: '门禁',
    bank: '总行营业部',
    brand: '讯美',
    company: '成都科旭电子有限公司',
    contactName: '李经理',
    phone: '13988888888',
  },
  {
    key: '5',
    devName: '营业网点门禁主机',
    devType: '门禁',
    bank: '总行营业部',
    brand: '讯美',
    company: '成都科旭电子有限公司',
    contactName: '李经理',
    phone: '13988888888',
  },
  {
    key: '6',
    devName: '营业网点NVR主机',
    devType: 'NVR',
    bank: '总行营业部',
    brand: '海康',
    company: '成都科旭电子有限公司',
    contactName: '李经理',
    phone: '13988888888',
  },
  {
    key: '7',
    devName: '自助网点报警主机',
    devType: '报警',
    bank: '武侯支行',
    brand: '亚光',
    company: '成都科旭电子有限公司',
    contactName: '李经理',
    phone: '13988888888',
  },
  {
    key: '8',
    devName: '营业网点报警主机',
    devType: '报警',
    bank: '武侯支行',
    brand: '亚光',
    company: '成都科旭电子有限公司',
    contactName: '李经理',
    phone: '13988888888',
  },
  {
    key: '9',
    devName: '现金区门禁主机',
    devType: '门禁',
    bank: '武侯支行',
    brand: '讯美',
    company: '成都科旭电子有限公司',
    contactName: '李经理',
    phone: '13988888888',
  },
  {
    key: '10',
    devName: '自助网点门禁主机',
    devType: '门禁',
    bank: '武侯支行',
    brand: '讯美',
    company: '成都科旭电子有限公司',
    contactName: '李经理',
    phone: '13988888888',
  },
  {
    key: '11',
    devName: '营业网点门禁主机',
    devType: '门禁',
    bank: '武侯支行',
    brand: '讯美',
    company: '成都科旭电子有限公司',
    contactName: '李经理',
    phone: '13988888888',
  },
  {
    key: '12',
    devName: '营业网点NVR主机',
    devType: 'NVR',
    bank: '武侯支行',
    brand: '海康',
    company: '成都科旭电子有限公司',
    contactName: '李经理',
    phone: '13988888888',
  },
];

class Assets extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Card>
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    );
  }
}

export default Assets;

