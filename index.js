var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');

var app = express();
app.use(express.static(__dirname));

const PORT = 8080;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"))
});

app.listen(PORT);