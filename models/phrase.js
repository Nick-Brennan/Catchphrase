var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phraseSchema = new Schema({
	word: String,
	definition: String
});

var Phrase = mongoose.model("Phrase", phraseSchema);

module.exports = Phrase;