var express = require('express');
var app = express();
var path = require('path');

//routing
var index = require('./routes/index');
app.use('/index', index);

var resume = require("./routes/resume");
app.use("/resume", resume);

var projects = require("./routes/projects");
app.use("/projects", projects);

var contact = require('./routes/contact');
app.use('/contact', contact);

//use static image source
app.use(express.static(__dirname + '/images'));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/contact.html/form-submitted', function (req, res) {
    console.log("form submitted");
    res.send("form submitted!");
});

var port = process.env.PORT || 3030;

var server = app.listen(port, "localhost", function () {
    console.log('Running server on port' + port);
    console.log('server ip: ' + server.address().address);
});

