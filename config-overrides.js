/*
 * File: \config-overrides.js
 * Project: antd-demo
 * Description:
 * Created By: Tao.Hu 2019-07-17
 * -----
 * Last Modified: 2019-07-17 12:14:03 am
 * Modified By: Tao.Hu
 * -----
 * Copyright (c) 2019 KiwiSec Tech Co.,Ltd
 */
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);