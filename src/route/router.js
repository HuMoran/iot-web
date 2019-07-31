/**
 * File: router.js
 * Project: iot-web
 * Created Date: Friday, July 19th 2019, 10:28:36 pm
 * Author: Tao Hu htax2013@gmail.com
 * -----
 * Last Modified: Wed Jul 24 2019
 * Modified By: Tao Hu
 * -----
 * Copyright (c) 2019 Kideasoft Tech Co.,Ltd.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from '../pages/login/index';
import Home from '../pages/home/index';

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Login} />
      </div>
    </Router>
  );
}

export default AppRouter;
