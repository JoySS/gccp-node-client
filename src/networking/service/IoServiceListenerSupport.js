/**
 * Created by Administrator on 2016/7/23 0023.
 */

var IoServiceListenerSupport = function(){

    var manganSessions;

    IoServiceListenerSupport.prototype.fireSessionCreated = function(session){
        var first = !manganSessions;

        if(!manganSessions){
            manganSessions = {};
        }

        if ((session.sessionId instanceof manganSessions)){
            manganSessions[session.sessionId] = session;
        }

        if (first) {
            //todo
        }

        //链式调用
        var chain = session.filterChain;
        chain.fireSessionCreated();

        //触发service中控session事件
        session.service.sessionCreated(session);
    };
};