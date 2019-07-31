/**
 * File: index.js
 * Project: iot-web
 * Created Date: Wednesday, July 24th 2019, 7:56:29 pm
 * Author: Tao Hu htax2013@gmail.com
 * -----
 * Last Modified: Thu Jul 25 2019
 * Modified By: Tao Hu
 * -----
 * Copyright (c) 2019 Kideasoft Tech Co.,Ltd.
 */
import React from 'react';
import { Input,  Icon, Button } from 'antd';
import { NavLink, Redirect, Link } from "react-router-dom";
import Home from '../home/index';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    error: false,
  };

  onChange = (e) => {
    this.setState({ error: false, [e.target.name]: e.target.value });
  };

  onLogin = (event) => {
    const { username, password } = this.state;
    if (username !== '18688831586' || password !== 'a123456') {
      this.setState({ error: true });
      return;
    }
    this.props.history.push('/home', null)
  }

  render() {
    return (
      <div style={{width: '300px', margin: '200px auto auto auto', textAlign:'center'}}>
        <div style={{fontSize: '2em', fontWeight: '500', letterSpacing: '2px', marginBottom: '24px'}}>智能安防电源运维系统</div>
        <Input.Group style={{width:'300px', textAlign:'center'}}>
          <Input
            size="large"
            name="username"
            placeholder="邮箱/手机号"
            prefix={<Icon type="user" />}
            style={{margin: '12px 0px'}}
            onChange={this.onChange}
            />
          <Input.Password
            size="large"
            type="password"
            name="password"
            placeholder="密码"
            prefix={<Icon type="lock" />}
            style={{margin: '12px 0px'}}
            onChange={this.onChange}
          />
        </Input.Group>
        {this.state.error && <div style={{color:'red'}}>请输入正确的用户名和密码</div>}
        <Button type="primary" size="large" style={{width:'300px', marginTop: '24px'}} onClick={this.onLogin}>登录</Button>
      </div>
    );
  }
}
export default Login;
