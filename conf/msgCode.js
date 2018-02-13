/**
 * 项目相关提示信息配置
 * @type {Object}
 */
var MSG_CODE = {
    SUCCESS_CODE                : "0",
    SUCCESS_MSG                 : "SUCCESS",
    NETWORK_ERROR_CODE          : "9000",
    NETWORK_ERROR_MSG           : "爬虫网络错误",
    // 数据库相关描述
    DBERROR_CONNECTION_CODE             : "1000",
    DBERROR_CONNECTION_MSG              : "数据库连接失败",
    DBERROR_TABLE_NOTEXIT_CODE          : "1001",
    DBERROR_TABLE_NOTEXIT_MSG           : "数据表不存在",
    DBERROR_DATA_FORMAT_CODE            : "1002",
    DBERROR_DATA_FORMAT_MSG             : "数据格式错误",
    DBERROR_DATA_FIELD_CODE             : "1003",
    DBERROR_DATA_FIELD_MSG              : "数据字段错误",
    DBERROR_OTHER_CODE                  : "1004",
    DBERROR_OTHER_MSG                   : "其他错误",
    // 添加用户相关      
    ADDUSER_USERNAME_EMPTY_CODE         : "2000",
    ADDUSER_USERNAME_EMPTY_MSG          : "用户名为空",
    ADDUSER_PASSWORD_EMPTY_CODE         : "2001",
    ADDUSER_PASSWORD_EMPTY_MSG          : "密码为空",
    ADDUSER_PHONE_EMPTY_CODE            : "2002",
    ADDUSER_PHONE_EMPTY_MSG             : "手机号为空",
    // 通过用户ID获取用户信息
    QUERYUSER_USER_PARAMS_ILLEGAL_CODE  : "2100",
    QUERYUSER_USER_PARAMS_ILLEGAL_MSG   : "参数有误",
    QUERYUSER_USER_NOT_EXIT_CODE        : "2101",
    QUERYUSER_USER_NOT_EXIT_MSG         : "用户不存在",

    // 添加微信文章
    ADDWX_ARTICLE_EMPTY_CODE            : "3000",
    ADDWX_ARTICLE_EMPTY_MSG             : "文章列表为空",
    ADDWX_ARTICLE_DATA_ILLEGAL_CODE     : "3001",
    ADDWX_ARTICLE_DATA_ILLEGAL_MSG      : "数据不合法",
    // 查询微信文章
    QUERYWX_ARTICLE_NOT_EXIT_CODE       : "3101",
    QUERYWX_ARTICLE_NOT_EXIT_MSG        : "文章不存在",

    // 百度股市通爬虫
    BIDU_GUPIAO_DATA_ERROR_CODE        : "4000",
    BIDU_GUPIAO_DATA_ERROR_MSG         : "百度股市通数据错误",
    GUPIAO_INVALID_CODE                 : "4001",
    GUPIAO_INVALID_MSG                  : "本股不符合筛选条件"

};

module.exports = MSG_CODE;