/**
 * File: router.js
 * Project: iot-web
 * Created Date: Friday, July 19th 2019, 10:28:36 pm
 * Author: Tao Hu htax2013@gmail.com
 * -----
 * Last Modified: Sat Jul 20 2019
 * Modified By: Tao Hu
 * -----
 * Copyright (c) 2019 Kideasoft Tech Co.,Ltd.
 */
import React from 'react';
import { Router, Route } from 'react-router';

import Home from '../pages/home/index';
import Assets from '../pages/assets/index';

function RouteBase() {
  return (
  <Router>
    <Route path="/" component={Assets}>
      <Route path="home" component={Assets}/>
      <Route path="assets" component={Assets}/>
    </Route>
  </Router>
  );
}

export default RouteBase;
