var express = require('express')
var fs      = require('fs')
var app = express()
var sys = require('sys')
var exec = require('child_process').exec;
var redis = require('redis');

app.get('/', function(req, res) 
{
	res.send("Hello!!This is green Build for devops-HW4!");
});

var server = app.listen(3000, function () {

	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port)
});

var portrange = 6500
var containers = {}
var http = require('http')
var proxy = require('http-proxy')

app.get('/spawn', function(req, res) { 
		res.send("Container is spawned ");
        var proxyServer = proxy.createProxyServer({})
        proxyServer.web(req, res, {
		    target: "http://172.17.0.1:3002/"
		    });
    })



