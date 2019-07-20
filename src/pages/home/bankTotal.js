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
import { Collapse, Statistic, Row, Col, Icon, Divider, Button, Avatar } from 'antd';
import bankConfig from './bankConfig';
import Total from './total';
import { sendCommand, getStatus } from '../../utils/fetch';
import openImg from './open.png';
import closeImg from './close.png';
import './bankTotal.css';

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

class Bank extends React.Component {
  state = {
    ...this.props.data.devices.reduce((r, e) => ({ ...r, [e.id]: e.isOpen }), {})
  };
  onClick = (id) => {
    console.log('event:', id);
    const action = this.state[id] ? 'open' : 'close';
    sendCommand(id, action).then(msg => {
      console.log('return msg:', msg);
      if (msg.state === 200) {
        this.setState({ [id]: !this.state[id] });
      }
    });
  }
  render() {
    const { data } = this.props;
    const normalState = [
      { color: '#3f8600', icon: 'smile' },
      { color: '#3f8600', icon: 'smile' },
      { color: '#36cfc9', icon: 'cloud' },
      { color: '#597ef7', icon: 'dashboard' },
      { color: '#73d13d', icon: 'dashboard' },
    ];
    const errorState = [
      { color: 'red', icon: 'alert' },
      { color: 'red', icon: 'alert' },
      { color: 'red', icon: 'cloud' },
      { color: 'red', icon: 'dashboard' },
      { color: 'red', icon: 'dashboard' },
    ];
    const { status, devices } = data;
    const deviceTmp = devices.reduce((r, e, i) => {
      const index = Math.floor(i/3);
      if (r[index]) {
        r[index].push(e);
      } else {
        r[index] = [e];
      }
      return r;
    }, []);
  
    return (
      <div>
        <Divider orientation="left" style={{ fontWeight: '350' }}>实时监测</Divider>
        <Row gutter={12} type="flex" justify="center">
          {status.map((e, i) => 
            <Col span={4} key={i}>
              <Statistic
                key={e.id}
                title={e.title}
                value={e.stateText[e.state]}
                valueStyle={{ color: `${e.state ? normalState[i].color : errorState[i].color}`, fontSize: '1.2em' }}
                prefix={<Icon type={`${e.state ? normalState[i].icon : errorState[i].icon}`}/>}
              />
            </Col>
          )}
        </Row>
        <Divider orientation="left" style={{ fontWeight: '350' }}>智能控制</Divider>
        {deviceTmp.map((line, index) =>
          <Row gutter={12} type="flex" justify="center" style={{ margin: '24px 0px'}} key={index}>
            {line.map((e, i) =>
              <Col span={6} style={{ fontSize: '1em' }} key={e.id}>
                <Avatar className='icon' src={this.state[e.id] ? openImg: closeImg} onClick={() => this.onClick(e.id)}></Avatar>
                <span style={{ padding: '0px 12px'}}>{e.name}</span>
              </Col>
            )}
          </Row>
        )}
      </div>
    );
  }
}
class BlankTotal extends React.Component {
  state = {
    '1': 'close',
    '2': 'close',
  };
  render() {
    const { onClick } = this.props;
    return (
      <div style={{ padding: 24, background: '#fff' }}>
        <Collapse
          bordered={false}
          defaultActiveKey={['1', '2', '3']}
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
          <Total />
          {bankConfig.map(bank =>
            <Panel header={bank.title} key={bank.id} style={customPanelStyle}>
              <Bank
                key={bank.id}
                onClick={onClick}
                data={bank}
              />
            </Panel>
          )}
        </Collapse>
      </div>
    )
  }
}

export default BlankTotal;
