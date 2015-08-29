var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Catchphrase');

module.exports.Phrase = require('./phrase');