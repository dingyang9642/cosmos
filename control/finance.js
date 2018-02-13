var COMMON = require('./common');
var schedule = require("node-schedule");
var COMMON_MODULE = require('../modules/common');
var FINANCE_MODULE = require('../modules/finance');
var MSGCODE = require('../conf/msgCode');
var APPCONFIG = require('../conf/conf');
var ToolUtil = require('../lib/tools');     // 基本工具库对象

/**
 * 金融相关操作控制层
 * @type {Object}
 */
var financeControl = {
	/**
	 * 是否金叉
	 * @Author   dingyang   [dingyang9642@126.com]
	 * @DateTime 2017-10-13
	 * @param    {[type]}   code                 代码
	 * @param    {[type]}   type                 '30'／30分钟；'60'／60分钟
	 * @return   {Boolean}                       [description]
	 */
	isMacdGoldenCross: function() {
        FINANCE_MODULE.getKlineDatas('sz002378', '30', 30, function(){
        	
        });
	}

};

module.exports = financeControl;