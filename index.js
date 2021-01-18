var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');

var app = express();
app.set('port', (process.env.PORT || 8080));
app.use("/public", express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const PORT = 8080;

app.get('/', function(req, res) {
    res.render(path.join(__dirname + "/pages/index.html"))
});

for (let i=1;i<=1;i++) {
    app.get(`/level${i}`, function(req, res) {
        fs.readFile(path.join(__dirname + `/savegames/level${i}.trg`), 'utf8', function(err, data) {
            res.render(path.join(__dirname + `/pages/levels.html`), {data:data});
        });
    });
}

app.listen(PORT);