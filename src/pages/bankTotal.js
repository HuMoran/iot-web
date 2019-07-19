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
import { Collapse, Statistic, Row, Col, Card, Icon } from 'antd';

const { Panel } = Collapse;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function BlankTotal() {
  return (
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
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<Icon type="security-scan" />}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="断电设备"
                  value={1}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<Icon type="poweroff" />}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="温度"
                  value='20°c'
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<Icon type="cloud" />}
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
  )
}

export default BlankTotal;
