var express = require('express');
var router = express.Router();
var COMMON = require('../modules/common');     // 基本工具库对象

/** 页面路由配置 **/
router.get('/', function(req, res) {
    res.redirect('/i');
});
router.get('/i', function(req, res, next) {
    res.render('xinxi/index', {});
});

module.exports = router;
