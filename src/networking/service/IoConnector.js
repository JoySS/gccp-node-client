/**
 * Created by Administrator on 2016/7/23 0023.
 *
 * 客户端连接服务
 *
 */

var IoHandler = require('./IoHandler');
var IoServiceListenerSupport = require('./IoServiceListenerSupport');
var Map = require('../utils/Map');

//构造方法
function IoConnector(){
    var session = new Map;
    var _connectQueue = new Array;
    var _closeQueue = new Array;
    _DEFAULT_HANDLER = new IoHandler;
    var listeners = new IoServiceListenerSupport;
    var _filterChainBuilder = {};


    IoConnector.prototype.GetFilterChain = function(){
    };

    IoConnector.prototype.connect = function(){

    };
}


