const express = require('express');
const path = require('path');
const { env } = require('process');
const app = express();

app.use(express.static(path.join(__dirname, '..','client','build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'..', 'client', 'build', 'index.html'));
});

app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname,'..', 'client', 'build', 'index.html'));
});

var port = process.env.PORT || 3030;

console.log('Running server on port ' + port);

app.listen(port);