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
import { sendCommand } from '../../utils/fetch';
import openImg from './open.png';
import closeImg from './close.png';
import './bankTotal.css';

import water from './water.png';
import temperature from './temperature.png';
import seepage from './seepage.png';

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
    ...this.props.data.devices.reduce((r, e) => ({ ...r, [e.id]: e.isOpen }), {}),
    '10': 1,
    '10Text': ['断电', '正常'],
    '11': 1,
    '11Text': ['断电', '正常'],
    '12': 1,
    '12Text': ['46°C', '22°C'],
    '13': 1,
    '13Text': ['60°C', '50%'],
    '14': 1,
    '14Text': ['渗水', '正常'],
  };
  onClick = async (id) => {
    const { onClick } = this.props;
    await sendCommand(id, 'close');
    setTimeout(() => this.setState({ [id]: false }), 500);
    setTimeout(() => sendCommand(id, 'open'), 2000);
    setTimeout(() => sendCommand(id, 'open'), 3000);
    setTimeout(() => { 
      this.setState({ [id]: true });
      onClick('运维操作', `重启${id === '10' ? '自助网点报警主机' : '营业网点报警主机' }电源`)
    }, 3200);
  }
  onChange = (id) => {
    if (id === 0 || id === 1) {
      const { onChangeTotal, onClick } = this.props;
      setTimeout(() => {
        if (this.state[`1${id}`]) {
          onChangeTotal(id);
          onClick('主动上报', `${id === 0 ? '市电' : 'UPS'}断电`);
        } else {
          onClick('主动上报', `${id === 0 ? '市电' : 'UPS'}上电`);
        }
        this.setState({ [`1${id}`]: this.state[`1${id}`] === 1 ? 0 : 1 });
      }, 10000);
    }
  }
  getIcon = (i) => {
    switch (i) {
      case 2:
        return (<img src={temperature} alt='' style={{width: '24px', height: '24px'}}/>);
      case 3:
        return (<img src={water} alt='' style={{width: '24px', height: '24px'}}/>);
      case 4:
        return (<img src={seepage} alt='' style={{width: '24px', height: '24px'}}/>);
        default:
        break;
    }
  }
  render() {
    const { data } = this.props;
    const normalState = [
      { color: '#3f8600', icon: 'smile' },
      { color: '#3f8600', icon: 'smile' },
      { color: '#3f8600', icon: 'cloud' },
      { color: '#3f8600', icon: 'dashboard' },
      { color: '#3f8600', icon: 'dashboard' },
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
            <Col span={4} key={i} onClick={() => this.onChange(i)}>
              <Statistic
                key={e.id}
                title={e.title}
                value={this.state[`1${i}Text`][this.state[`1${i}`]]}
                valueStyle={{ color: `${this.state[`1${i}`] ? normalState[i].color : errorState[i].color}`, fontSize: '1.2em' }}
                prefix={i >= 2 ? this.getIcon(i) : <Icon type={`${this.state[`1${i}`] ? normalState[i].icon : errorState[i].icon}`}/>}
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
    values: window.myData.values,
  };
  onChangeTotal = (i) => {
    if (i === 0 || i === 1) {
      const values = this.state.values.slice();
      values[i + 1] += 1;
      window.myData.values = values;
      this.setState({ values });
      return;
    }
  }
  render() {
    const { onClick } = this.props;
    return (
      <div style={{ padding: 24, background: '#fff' }}>
        <Collapse
          bordered={false}
          defaultActiveKey={['1', '2', '3']}
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
          <Total values={this.state.values}/>
          {bankConfig.map(bank =>
            <Panel header={bank.title} key={bank.id} style={customPanelStyle}>
              <Bank
                key={bank.id}
                onClick={onClick}
                data={bank}
                onChangeTotal={this.onChangeTotal}
              />
            </Panel>
          )}
        </Collapse>
      </div>
    )
  }
}

export default BlankTotal;
