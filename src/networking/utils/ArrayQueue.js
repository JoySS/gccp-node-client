/**
 * Created by Administrator on 2016/7/23 0023.
 */

function ArrayQueue(capacity) {

    var _queue = new Array;

    ArrayQueue.prototype.offer = function(o){
        _queue.push(o);
    };

    ArrayQueue.prototype.peek = function(){
        if (_queue.length == 0){
            return _queue[0];
        }
        return null;
    };

    ArrayQueue.prototype.poll = function () {
        return _queue.shift();
    };

    ArrayQueue.prototype.size = function () {
        return _queue.length;
    };

    ArrayQueue.prototype.clear = function () {
        _queue = new Array;
    };

    ArrayQueue.prototype.empty = function(){
        return _queue.length == 0;
    };
};