var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var views = path.join(process.cwd(), "views/");
var db = require('./models');

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

app.get('/', function(req, res){
	res.sendFile(views + "index.html");
});

app.get('/phrases', function(req, res){
	db.Phrase.find({}, function(err, phrases){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}
		res.send(phrases);
	});
});

app.listen(3004, function(){
	console.log("listening on port 3004");
})

// var phrases = [
// {word: "Array", definition: "A collection ordered by index (0 based)"},
// {word: "CSS", definition: "Cascading Style Sheet"}
// ];