/*
 * File: \src\pages\bankTotal.js
 * Project: iot-web
 * Description:
 * Created By: Tao.Hu 2019-07-17
 * -----
 * Last Modified: 2019-07-17 09:43:49 pm
 * Modified By: Tao.Hu
 * -----
 * Copyright (c) 2019 Kideasoft Tech Co.,Ltd
 */
import React from 'react';
import { Collapse, Statistic, Row, Col, Card, Icon, Switch, Divider, Tag } from 'antd';

import k1 from './33.png';
import k2 from './33.png';
import k3 from './33.png';
import k4 from './44.png';

const { Panel } = Collapse;

const customPanelStyle = {
  // background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
  fontWeight: '400',
  fontSize: '1.3em',
};

function Bank() {
  return (
    <div>
      <Divider orientation="left" style={{ fontWeight: '350' }}>实时监测</Divider>
      <Row gutter={12} type="flex" justify="center">
        <Col span={4}>
          <Statistic title="市电状态" value={'正常'} valueStyle={{ color: '#3f8600', fontSize: '1.2em' }} prefix={<Icon type="smile" />} />
        </Col>
        <Col span={4}>
          <Statistic title="UPS状态" value={'断电'} valueStyle={{ color: 'red',fontSize: '1.2em' }} prefix={<Icon type="alert" style={{color: 'red'}} />} />
        </Col>
        <Col span={4}>
          <Statistic title="机房温度" value={'26°C'} valueStyle={{ color: '#36cfc9',fontSize: '1.2em' }} prefix={<Icon type="cloud" style={{color: '#36cfc9'}} />} />
        </Col>
        <Col span={4}>
          <Statistic title="机房湿度" value={'40%'} valueStyle={{ color: '#597ef7',fontSize: '1.2em' }} prefix={<Icon type="dashboard" style={{color: '#597ef7'}} />} />
        </Col>
        <Col span={4}>
          <Statistic title="渗水监测" value={'正常'} valueStyle={{ color: '#73d13d',fontSize: '1.2em' }} prefix={<Icon type="dashboard" style={{color: '#73d13d'}} />} />
        </Col>
      </Row>
      <Divider orientation="left" style={{ fontWeight: '350' }}>智能控制</Divider>
      <Row gutter={12} type="flex" justify="center" style={{ margin: '24px 0px'}}>
        <Col span={6} style={{ fontSize: '1em' }}>
            <img src={k1} style={{ width: '32px'}} alt=''/>
            <span style={{ padding: '0px 12px'}}>自助网点报警主机</span>
        </Col>
        <Col span={6}>
          <img src={k2} style={{ width: '32px'}} alt=''/>
          <span style={{ padding: '0px 12px'}}>营业网点报警主机</span>
        </Col>
        <Col span={6}>
          <img src={k3} style={{ width: '32px'}} alt=''/>
          <span style={{ padding: '0px 12px'}}>金库门禁主机</span>
        </Col>
      </Row>
      <Row gutter={12} type="flex" justify="center" style={{ margin: '0px'}}>
        <Col span={6} style={{ fontSize: '1em' }}>
          <img src={k4} style={{ width: '32px'}} alt=''/>
            <span style={{ padding: '0px 12px'}}>营业网点门禁主机</span>
        </Col>
        <Col span={6}>
          <img src={k3} style={{ width: '32px'}} alt=''/>
          <span style={{ padding: '0px 12px'}}>NVR主机</span>
        </Col>
        <Col span={6}>
          <img src={k3} style={{ width: '32px'}} alt=''/>
          <span style={{ padding: '0px 12px'}}>NVR主机</span>
        </Col>
      </Row>
    </div>
  );
}

function BlankTotal() {
  return (
    <div style={{ padding: 24, background: '#fff' }}>
      <Collapse
        bordered={false}
        defaultActiveKey={['1', '2', '3']}
        expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
      >
        <Panel header="番薯支行" key="1" style={customPanelStyle}>
          <Bank />
        </Panel>
        <Panel header="番薯支行2" key="2" style={customPanelStyle}>
          <Bank />
        </Panel>
        <Panel header="番薯支行3" key="3" style={customPanelStyle}>
          <Bank />
        </Panel>
      </Collapse>
    </div>
  )
}

export default BlankTotal;
