var express = require('express');
var appFinanceApi = express();
var financeControl = require('../control/finance');


appFinanceApi.get('/start', function(req, res) {
	// 1、获取请求参数
    res.json({
    	msg: '启动爬虫...'
    });
});

module.exports = appFinanceApi;
