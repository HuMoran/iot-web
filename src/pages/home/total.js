/**
 * File: total.js
 * Project: iot-web
 * Created Date: Saturday, July 20th 2019, 9:43:57 pm
 * Author: Tao Hu htax2013@gmail.com
 * -----
 * Last Modified: Sat Jul 20 2019
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
    value: 262,
    icon: protect,
  }, {
    title: '市电断电次数',
    value: 5,
    icon: power,
  }, {
    title: 'UPS断电次数',
    value: 2,
    icon: ups,
  },
  ], [{
    title: '温度告警次数',
    value: 3,
    icon: temperature,
  }, {
    title: '湿度告警次数',
    value: 1,
    icon: water
  }, {
    title: '渗水告警次数',
    value: 0,
    icon: seepage,
  }],
];

function Total() {
  return (
    <div>
      {data.map((line, index) =>
        <Row key={index} gutter={48} type="flex" justify="center" align="bottom" style={{ margin: '24px 0px' }}>
          {line.map((e, i) =>
            <Col span={8} key={i}>
              <Card style={{textAlign: 'center', borderWidth: '2px', verticalAlign: 'middle'}}>
                <Statistic
                  title={e.title}
                  value={e.value}
                  valueStyle={{ color: 'green', fontSize: '2.4em', lineHeight: '52px'}}
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

export default Total;
