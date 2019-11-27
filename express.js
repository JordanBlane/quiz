const express = require("express");
const app = express();
const path = require('path')
app.listen(3000, function(){
    console.log("listening");
})
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html')
})
app.use(express.static(path.join(__dirname, 'public')));