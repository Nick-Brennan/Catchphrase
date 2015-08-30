var db = require('./models');



var phrases = [{
	word: "Protocol",
	definition: "In information technology, a protocol is the special set of rules that end points in a telecommunication connection use when they communicate. Protocols specify interactions between the communicating entities."
},{
	word: "Bash",
	definition: "Bash, though typically not capitalized, is an acronym for 'Bourne-Again Shell' and is named after Stephen Bourne, the creator of the Unix shell 'sh.'' It is a command language interpreter derived from sh that can execute commands entered at a command prompt and process text file input."
},{
	word: "Repository",
	definition: "In software development, a repository is a central file storage location. It is used by version control systems to store multiple versions of files. While a repository can be configured on a local machine for a single user, it is often stored on a server, which can be accessed by multiple users."
}];


db.Phrase.remove({}, function(err, result){
	db.Phrase.create(phrases, function(err, result){
		if(err){
			console.log(err);
		}
		console.log(result);
	});
});



db.Phrase.find({word: "Bash"}, function(err, phrases){
	if(err){
		console.log(err);
	}
	console.log(phrases);
});

