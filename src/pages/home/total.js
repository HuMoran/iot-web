/**
 * File: total.js
 * Project: iot-web
 * Created Date: Saturday, July 20th 2019, 9:43:57 pm
 * Author: Tao Hu htax2013@gmail.com
 * -----
 * Last Modified: Thu Jul 25 2019
 * Modified By: Tao Hu
 * -----
 * Copyright (c) 2019 Kideasoft Tech Co.,Ltd.
 */
import React from 'react';
import { Row, Col, Icon, Table, Card, Statistic, Avatar } from 'antd';

import protect from './protect.png';
import water from './water.png';
import ups from './ups.png';
import power from './power.png';
import temperature from './temperature.png';
import seepage from './seepage.png';

const data = [
  [{
    title: '安全运行天数',
    value: 171,
    icon: protect,
    color: 'green',
  }, {
    title: '市电断电次数',
    value: 18,
    icon: power,
    color: 'red',
  }, {
    title: 'UPS断电次数',
    value: 5,
    icon: ups,
    color: 'red',
  },
  ], [{
    title: '温度告警次数',
    value: 3,
    icon: temperature,
    color: 'red',
  }, {
    title: '湿度告警次数',
    value: 5,
    icon: water,
    color: 'red',
  }, {
    title: '渗水告警次数',
    value: 1,
    icon: seepage,
    color: 'red',
  }],
];

class Total extends React.Component {
  render() {
    const { values } = this.props;
    return (
      <div>
        {data.map((line, index) =>
          <Row key={index} gutter={48} type="flex" justify="center" align="bottom" style={{ margin: '24px 0px' }}>
            {line.map((e, i) =>
              <Col span={8} key={i}>
                <Card style={{textAlign: 'center', borderWidth: '2px', verticalAlign: 'middle'}}>
                  <Statistic
                    title={e.title}
                    value={values[i + index * 3]}
                    valueStyle={{ color: e.color, fontSize: '2.4em', lineHeight: '52px'}}
                    prefix={<Avatar shape='square' src={e.icon} style={{margin: 'auto 12px', lineHeight: '52px'}}></Avatar>}
                  />
                </Card>
              </Col>
            )}
          </Row>
        )}
      </div>
    )
  }
}

export default Total;
