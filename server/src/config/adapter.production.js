// 生产环境配置
const path = require('path');
const mysql = require('think-model-mysql');
const isDev = think.env === 'development';

exports.model = {
  type: 'mysql',
  common: {
    logConnect: isDev,
    logSql: isDev,
    logger: msg => think.logger.info(msg)
  },
  mysql: {
    handle: mysql,
    database: 'blog',
    prefix: '',
    encoding: 'utf8',
    host: 'blog-mysql-container',
    port: '3306',
    user: 'root',
    password: 'linxdroot',
    dateStrings: true
  }
};

