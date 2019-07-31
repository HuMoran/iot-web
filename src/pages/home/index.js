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
import { Layout, Menu,  Icon, Table, Card, Button } from 'antd';
import BankTotal from './bankTotal';
import Assets from '../assets/index';
import Report from '../report/index';
import Company from '../company/index';
import User from '../user/index';
import Log from '../log/index';
import { sendCommand, getStatus } from '../../utils/fetch';
import './index.css';

import bankLogo from './bankLogo.png';

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

class Home extends React.Component {
  state = {
    collapsed: false,
    page: 'home',
    '1': 'close',
    '2': 'close',
    data: window.myData.data,
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  onSelect = (event) => {
    const { key } = event;
    this.setState({ page: key });
  }

  onLogout = () => {
    this.props.history.push('/login', null)
  }

  onClickSwitch = (type, content) => {
    const data = JSON.parse(JSON.stringify(this.state.data));
    const newData = {
      key: data.length,
      time: new Date().toLocaleString(),
      bank: '成都农商银行总行营业部',
      type,
      content,
    };
    window.myData.data.unshift(newData);
    data.unshift(newData);
    this.setState({ data });
    console.log(this.state.data);
  }

  render() {
    return (
      <div>
        <Header style={{ background: '#018E7B', padding: '0 32px' }}>
          <span style={{ fontSize: '1.8em', color: '#fff', fontWeight: '600', letterSpacing: '8px'} }>智能安防电源运维系统</span>
          <span>
            <Button type='primary' icon='logout' style={{ lineHeight: '64px', height: '60px', fontSize: '1em', fontWeight: '500', float: 'right'}} onClick={this.onLogout}>退出</Button>
            <Button type='primary' icon='user' style={{ lineHeight: '64px', height: '60px', fontSize: '1em', fontWeight: '500', float: 'right'}}>温经理</Button>
          </span>
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
              <Menu.Item key="report">
                <Icon type="line-chart" />
                <span>报表</span>
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
                <Menu.Item key="user">人员</Menu.Item>
                <Menu.Item key="log">日志</Menu.Item>
                <Menu.Item key="company">企业信息</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <div style={{ margin: '16px 0px', textAlign: 'center', fontSize: '1.4em', fontWeight: '500', }}>
                <img src={bankLogo} alt=''></img>
              </div>
              {this.state.page === 'home' && (<div>
                <BankTotal onClick={this.onClickSwitch} />
                  <Card style={{ margin: '16px 0px'}} title={<span style={{fontSize: '1.3em', fontWeight: '400'}}>最新告警信息</span>}>
                    <Table style={{ margin: '0px 48px'}} columns={columns} dataSource={this.state.data} scroll={{ y: 240 }} pagination={false} />
                  </Card>
              </div>)}
              {this.state.page === 'assets' && <Assets />}
              {this.state.page === 'report' && <Report />}
              {this.state.page === 'company' && <Company />}
              {this.state.page === 'user' && <User />}
              {this.state.page === 'log' && <Log />}
            </Content>
            <Footer style={{ textAlign: 'center' }}>智能电源管理系统 Copyright (c) 2019 Kideasoft Tech Co.,Ltd</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Home;