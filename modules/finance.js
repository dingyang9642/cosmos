var https = require('https');
var http = require('http');
var qryStr = require('querystring');
var ToolUtil = require('../lib/tools');     // 基本工具库对象
var LOGGER = require('./logger');
var COMMON = require('./common');
var MSGCODE = require('../conf/msgCode');
var DB = require('./db');     // 基本工具库对象
/**
 * 投资模块
 * @type {Object}
 */
var FINANCE = {
	/**
	 * 获取k线数据
	 * @Author   dingyang   [dingyang@baidu.com]
	 * @DateTime 2017-10-13
	 * @param    {[type]}   code                 股票code
	 * @param    {[type]}   scale                ‘30’／30分钟
	 * @param    {[type]}   count                返回数据条数
	 * @return   {[type]}                        [description]
	 */
    getKlineDatas: function (code, scale, count, callback) {
    	var data = {   // 这是需要提交的数据
    		symbol: code,
    		scale: scale,
    		ma: 'no',
    		datalen: count || 30,
    		timestamp: new Date().getTime()
        };  
        var content = qryStr.stringify(data);
		var options = {  
		    hostname: 'money.finance.sina.com.cn',  
		    port: 80,  
		    path: '/quotes_service/api/json_v2.php/CN_MarketData.getKLineData?' + content,
		    method: 'GET'  
		};
		var req = http.request(options, function (res) {  
	        var datas = ''; 
	        res.on('data', function (data) {  
	            datas += data;
	        });  
	        res.on("end", function () {
                console.log(typeof datas);
	        }); 
		});
		req.on('error', function (e) {
			console.log('problem with request: ' + e.message);  
		    var formatResult = COMMON.formatResult(MSGCODE.NETWORK_ERROR_CODE, MSGCODE.NETWORK_ERROR_MSG, {});
		    callback && callback(formatResult);
		});
        req.end(); 
    },
    /**
     * 计算数组中移动平均线
     * @Author   dingyang   [dingyang@baidu.com]
     * @DateTime 2017-10-13
     * @param    {[type]}   closeDatas           [description]
     * @param    {[type]}   n                    可选参数，如果此参数存在，则会自动获取closedatas中后n位数据数据
     */
    EMA: function(closeDatas, n) {
        var len = closeDatas.length;
        var total = 0;
        var totalDays = 0;
        // 如果存在n,则重写closeDatas
        if(n && n <= len) {
        	closeDatas = closeDatas.slice((len - n));
        }
        len = closeDatas.length;
        for(var i = (len - 1); i >= 0; i--) {
            var tmpClose = closeDatas[i];
            total = total + (tmpClose * (i + 1));
            totalDays = totalDays + (i + 1);
        }
        return total / totalDays;
    },
    /**
     * 计算平均值
     * @Author   dingyang   [dingyang@baidu.com]
     * @DateTime 2017-10-13
     * @param    {[type]}   closeDatas           [description]
     * @param    {[type]}   n                    可选参数，如果此参数存在，则会自动获取closedatas中后n位数据数据
     */
    MA: function(closeDatas, n) {
        var len = closeDatas.length;
        var total = 0;
        var totalDays = 1;
        // 如果存在n,则重写closeDatas
        if(n && n <= len) {
        	closeDatas = closeDatas.slice((len - n));
        }
        len = closeDatas.length;
        for(var i = (len - 1); i >= 0; i--) {
            var tmpClose = closeDatas[i];
            total = total + tmpClose;
            totalDays = totalDays + 1;
        }
        return total / totalDays;
    },
    /**
     * dif计算
     * @Author   dingyang   [dingyang@baidu.com]
     * @DateTime 2017-10-13
     * @param    {[type]}   closeDatas           [description]
     */
    DIF: function(closeDatas) {
        var self = this;
        var EMA_12 = self.EMA(closeDatas, 12);
        var EMA_26 = self.EMA(closeDatas, 26);
        var DIF = EMA_12 - EMA_26;
        console.log(DIF);
    },
    DEA: function() {
        EMA(DIFF,M)
    },
    MACD: function() {
        (DIFF-DEA)*2
    },
    CROSS: function() {

    },
};

module.exports = FINANCE;