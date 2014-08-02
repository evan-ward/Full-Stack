var express = require('express');

// var bodyParser = require('body-parser')

var app = express();

var data = require('./server-assets/myData');

var family = data.getFamily();
console.log(data);

var friends = data.getFriends();

// app.use(bodyParser.json());

app.get('/', function(req, res){
	
	res.status(200).send('hello');
}

app.get('/family', function(req, res){
	
	res.status(200).send(family);
}

app.get('/friends', function(req, res){
	res.status(200).send(friends);

	console.log("friends get got");
}





app.listen(8080);