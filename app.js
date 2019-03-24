var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/test', function(req, res) {
  res.send('test');
});

app.listen(process.env.PORT, process.env.IP);
