//setting up dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var views = path.join(process.cwd(), "views/");
var db = require('./models');

//config body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//setting up path aliases for client-side resources
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

///////////////////////////////
//ROUTES
///////////////////////////////
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

app.post('/phrases', function(req, res){
	db.Phrase.create({word: req.body.word, definition: req.body.definition}, function(err, result){
		if(err){
			console.log(err);
		}
		res.redirect('/');
	});
});

app.delete('/phrases/:id', function(req, res){
	db.Phrase.remove({_id: req.params.id}, function(err, result){
		if(err){
			console.log(err);
		}
		res.send(result);
	});
});

app.put('/phrases', function(req, res){
	db.Phrase.update({word: req.body.word}, req.body, function(err, result){
		if(err){
			console.log(err);
		}
		res.send(result);
	});
});

//START EXPRESS SERVER
app.listen(3004, function(){
	console.log("listening on port 3004");
});
