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
import { Layout, Menu, Collapse, Icon, Statistic, Row, Col, Card } from 'antd';
import './home.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

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
      <Layout style={{ minHeight: '100vh' }}>
        <Sider style={{ background: '#fff', flex: '0 0 64px', maxWidth: '64px', minWidth: '64px', width: '64px' }} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo">{this.state.collapsed ? '晶点' : '智能电源管理系统' }</div>
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
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div style={{ margin: '16px 0' }}>广州市商业银行</div>
            <div style={{ padding: 24, background: '#fff' }}>
              <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
              >
                <Panel header="番薯支行" key="1" style={customPanelStyle}>
                  <Row gutter={16}>
                    <Col span={6}>
                      <Card>
                        <Statistic
                          title="设备总数"
                          value={20}
                          // precision={2}
                          valueStyle={{ color: '#3f8600' }}
                          prefix={<Icon type="security-scan" />}
                          // suffix="%"
                        />
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card>
                        <Statistic
                          title="断电设备"
                          value={1}
                          // precision={2}
                          valueStyle={{ color: '#cf1322' }}
                          prefix={<Icon type="poweroff" />}
                          // suffix="%"
                        />
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card>
                        <Statistic
                          title="温度"
                          value='20°c'
                          // precision={2}
                          valueStyle={{ color: '#3f8600' }}
                          prefix={<Icon type="cloud" />}
                          // suffix="%"
                        />
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card>
                        <Statistic
                          title="湿度"
                          value={20}
                          precision={2}
                          valueStyle={{ color: '#3f8600' }}
                          prefix={<Icon type="dashboard" />}
                          suffix="%"
                        />
                      </Card>
                    </Col>
                  </Row>
                </Panel>
                <Panel header="番薯支行2" key="2" style={customPanelStyle}>
                  <p>{text}</p>
                </Panel>
                <Panel header="番薯支行3" key="3" style={customPanelStyle}>
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>智能电源管理系统 Copyright (c) 2019 Kideasoft Tech Co.,Ltd</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Home;