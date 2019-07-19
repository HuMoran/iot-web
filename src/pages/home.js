/*
 * File: \src\pages\home.js
 * Project: antd-demo
 * Description:
 * Created By: Tao.Hu 2019-07-17
 * -----
 * Last Modified: 2019-07-17 12:45:46 am
 * Modified By: Tao.Hu
 * -----
 * Copyright (c) 2019 Kideasoft Tech Co.,Ltd
 */
import React from 'react';
import { Layout, Menu,  Icon, Table } from 'antd';
import './home.css';
import BankTotal from './bankTotal';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const columns = [
  {
    title: '告警时间',
    dataIndex: 'time',
    width: 200,
  }, {
    title: '告警银行',
    dataIndex: 'bank',
    width: 200,
  }, {
    title: '告警类型',
    dataIndex: 'type',
    width: 100,
  }, {
    title: '告警内容',
    dataIndex: 'content',
  },
];

const data = [{
  key: 0,
  time: new Date().toLocaleString(),
  bank: '广州农商行番薯支行',
  type: '主动上报',
  content: '市电断电',
}, {
  key: 1,
  time: new Date().toLocaleString(),
  bank: '广州农商行天河支行',
  type: '运维操作',
  content: '打开NVR电源'
}, {
  key: 2,
  time: new Date().toLocaleString(),
  bank: '广州农商行天河支行',
  type: '运维操作',
  content: '打开NVR电源'
}, {
  key: 2,
  time: new Date().toLocaleString(),
  bank: '广州农商行天河支行',
  type: '运维操作',
  content: '打开NVR电源'
}, {
  key: 2,
  time: new Date().toLocaleString(),
  bank: '广州农商行天河支行',
  type: '运维操作',
  content: '打开NVR电源'
}, {
  key: 3,
  time: new Date().toLocaleString(),
  bank: '广州农商行上帝支行',
  type: '运维操作',
  content: '打开报警主机'
}];

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <div>
        <Header style={{ background: '#018E7B', padding: '0 48px', fontSize: '1.5em', color: '#fff' }}>
          {/* <div className="logo">智能安防电源运维系统</div> */}
          智能安防电源运维系统
        </Header>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            onCollapse={this.onCollapse}
            collapsed={this.state.collapsed}
            style={{ background: '#fff', flex: '0 0 64px', maxWidth: '64px', minWidth: '64px', width: '64px' }}
          >
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>首页</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>资产</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>管理</span>
                  </span>
                }
              >
                <Menu.Item key="3">人员</Menu.Item>
                <Menu.Item key="4">日志</Menu.Item>
                <Menu.Item key="5">企业信息</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <div style={{ margin: '16px 0', textAlign: 'center', fontSize: '1.4em' }}>广州市商业银行</div>
              <BankTotal />
              <Table title={ () => '最新告警信息'} columns={columns} dataSource={data} scroll={{ y: 240 }} pagination={false} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>智能电源管理系统 Copyright (c) 2019 Kideasoft Tech Co.,Ltd</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Home;