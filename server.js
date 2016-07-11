var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

//Server logger
app.use(morgan('dev'));

//Parses a the request to be handles as a plain object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Serves up your public/client folder
app.use(express.static('public'));

//Sample routing
app.route('/')
  .get(function(req, res){
    res.send("index.html will come soon!");
  })
  .post()
  .put()
  .delete();

var port = process.env.PORT || 8000;

app.listen(port, function(){
  console.log('server is now listening on port 8000.');
});
