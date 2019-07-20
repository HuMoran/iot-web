/*
 * File: \src\pages\index.js
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
import { Layout, Menu,  Icon, Table, Card } from 'antd';
import './index.css';
import BankTotal from './bankTotal';
import { Link } from 'react-router-dom';
import Assets from '../assets/index';

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
  key: 3,
  time: new Date().toLocaleString(),
  bank: '广州农商行天河支行',
  type: '运维操作',
  content: '打开NVR电源'
}, {
  key: 4,
  time: new Date().toLocaleString(),
  bank: '广州农商行天河支行',
  type: '运维操作',
  content: '打开NVR电源'
}, {
  key: 5,
  time: new Date().toLocaleString(),
  bank: '广州农商行上帝支行',
  type: '运维操作',
  content: '打开报警主机'
}];

class Home extends React.Component {
  state = {
    collapsed: false,
    page: 'home',
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  onSelect = (event) => {
    const { key } = event;
    this.setState({ page: key });
  }

  render() {
    return (
      <div>
        <Header style={{ background: '#018E7B', padding: '0 32px', fontSize: '1.8em', color: '#fff', fontWeight: '600', letterSpacing: '8px' }}>
          智能安防电源运维系统
        </Header>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            onCollapse={this.onCollapse}
            collapsed={this.state.collapsed}
            style={{ background: '#fff', flex: '0 0 64px', maxWidth: '64px', minWidth: '64px', width: '64px' }}
          >
            <Menu theme="light" defaultSelectedKeys={['home']} mode="inline" onSelect={this.onSelect}>
              <Menu.Item key="home">
                <Icon type="pie-chart" />
                <span>首页</span>
              </Menu.Item>
              <Menu.Item key="assets">
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
              <div style={{ margin: '16px 0px', textAlign: 'center', fontSize: '1.4em', fontWeight: '500', }}>广州市商业银行</div>
              {this.state.page === 'home' && (<div>
                <BankTotal />
                  <Card style={{ margin: '16px 0px'}} title={<span style={{fontSize: '1.3em', fontWeight: '400'}}>最新告警信息</span>}>
                    <Table style={{ margin: '0px 48px'}} columns={columns} dataSource={data} scroll={{ y: 240 }} pagination={false} />
                  </Card>
              </div>)}
              {this.state.page === 'assets' && <Assets />}
            </Content>
            <Footer style={{ textAlign: 'center' }}>智能电源管理系统 Copyright (c) 2019 Kideasoft Tech Co.,Ltd</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Home;