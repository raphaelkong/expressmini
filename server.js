// Minimal config for node and express with socketio
var http = require("http");
var socket = require("socket.io");
var express = require("express");
var logger = require("morgan");
var httpserver, app, io;
var port;
var io;

port=1234;
app = express();
app.set('views',__dirname+"/views");
app.set('view engine','jade');
app.use(logger("short"));
app.use(express.static(__dirname+"/static"));

// deprecated : 
//app.use(app.router);
// we use external route management with app.use(app.router)
app.get('/',function(req,res){
 res.render('index',{title: apptitle});
});

httpserver = http.createServer(app);
io = socket.listen(httpserver);

httpserver.listen(port,function(){
 console.log("Server started and listening on port " + port);    
});
