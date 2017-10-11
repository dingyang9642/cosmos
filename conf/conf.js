/**
 * 项目相关配置项
 * @type {Object}
 */
/*
  1、进入终端
     mysql -u root -p
  2、服务启动与终止
     $ sudo /usr/local/mysql/support-files/mysql.server start
     $ sudo /usr/local/mysql/support-files/mysql.server stop
 */
var CONFIG = {
    // 数据数据库配置项
    "DB": {
        "HOST"      : "localhost",     // 数据库域名
        "USER"      : "root",          // 数据录登录用户名
        "PASS"      : "root",          // 数据库登录密码
        "PORT"      : "3306",          // 数据录登录端口
        "DATABASE"  : "baobei"         // 数据库名
    }
};

module.exports = CONFIG;