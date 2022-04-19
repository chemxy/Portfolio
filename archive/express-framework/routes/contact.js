const express = require('express');
const router = express.Router();

var path = require('path');

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'contact.html'));
});



module.exports = router;