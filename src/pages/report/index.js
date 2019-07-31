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
    title: '安全运行天数',
    dataIndex: 'secureCount',
    key: 'secureCount',
  },
  {
    title: '市电断电次数',
    dataIndex: 'power',
    key: 'power',
  },
  {
    title: 'UPS断电次数',
    key: 'upsPower',
    dataIndex: 'upsPower',
  },
  {
    title: '温度告警次数',
    dataIndex: 'temperature',
    key: 'temperature',
  },
  {
    title: '湿度告警次数',
    dataIndex: 'water',
    key: 'water',
  },
  {
    title: '渗水告警次数',
    dataIndex: 'seepage',
    key: 'seepage',
  },
];

const data = [
  {
    key: '1',
    name: '总行营业部',
    secureCount: '176',
    power: '4',
    upsPower: '1',
    temperature: '1',
    water: '0',
    seepage: '0',
  },
  {
    key: '2',
    name: '武侯支行',
    secureCount: '174',
    power: '5',
    upsPower: '2',
    temperature: '0',
    water: '1',
    seepage: '0',
  },
  {
    key: '3',
    name: '高新支行',
    secureCount: '171',
    power: '3',
    upsPower: '1',
    temperature: '2',
    water: '3',
    seepage: '1',
  },
  {
    key: '4',
    name: '金牛支行',
    secureCount: '175',
    power: '4',
    upsPower: '1',
    temperature: '0',
    water: '1',
    seepage: '0',
  },
  {
    key: '5',
    name: '锦江支行',
    secureCount: '177',
    power: '2',
    upsPower: '0',
    temperature: '1',
    water: '0',
    seepage: '0',
  },
];

const countData = [
  { id: '1', title: '安全运行天数', value: '171', color: 'green' },
  { id: '2', title: '市电断电次数', value: '18', color: 'red' },
  { id: '3', title: 'UPS断电次数', value: '5', color: 'red' },
  { id: '4', title: '温度告警次数', value: '3', color: 'red' },
  { id: '5', title: '湿度告警次数', value: '5', color: 'red' },
  { id: '6', title: '渗水告警次数', value: '1', color: 'red' },
];

class Report extends React.Component {
  state = {};

  render() {
    const status = countData.reduce((r, e, i) => {
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
        <Card>
          {status.map((line, i) => 
              <Row key={i} gutter={48} type="flex" justify="center" align="bottom" style={{ margin: '24px 0px' }}>
              {line.map((e, index) => 
                <Col span={8} key={e.id}>
                  <Card style={{textAlign: 'center', borderWidth: '2px', verticalAlign: 'middle'}}>
                    <Statistic
                      key={e.id}
                      title={e.title}
                      value={window.myData.values[i * 3 + index]}
                      valueStyle={{ color: e.color, fontSize: '2.4em' }}
                      // prefix={<Icon type={`${e.state ? normalState[i].icon : errorState[i].icon}`}/>}
                    />
                  </Card>
                </Col>
              )}
            </Row>
          )}
        </Card>
        <Card style={{margin: '16px 0px'}}>
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    );
  }
}

export default Report;

