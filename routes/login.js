/**
 * Created by Administrator on 2016/7/3 0003.
 */

var express = require("express");
var router  = express.Router();

/** login Page*/
router.get("/login", function(req, res, next){
   res.render('login', {name : "Login succes"});
});

module.exports = router;