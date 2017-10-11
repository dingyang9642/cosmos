var COMMON = require('./common');
var schedule = require("node-schedule");
var COMMONBUSINESS = require('../modules/common');
var financeDB = require('../modules/finance');
var MSGCODE = require('../conf/msgCode');
var APPCONFIG = require('../conf/conf');
var ToolUtil = require('../lib/tools');     // 基本工具库对象

/**
 * 金融相关操作控制层
 * @type {Object}
 */
var financeControl = {
    addDatasToDB: function(dataCount, currentIndex) {

    }
};

module.exports = financeControl;