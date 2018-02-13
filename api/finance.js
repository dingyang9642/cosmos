var express = require('express');
var appFinanceApi = express();
var financeControl = require('../control/finance');


appFinanceApi.get('/cross', function(req, res) {
	// 1、获取请求参数
	financeControl.isMacdGoldenCross();
    res.json({
    	msg: 'test'
    });
});

module.exports = appFinanceApi;
