$(function(){
	getPhrases();
});


function getPhrases(){
	$.get('/phrases', function(req, res){
		var template = _.template($('#phrase_template').html());
		req.forEach(function(phrase){
			$('#phrase_placeholder').append(template(phrase));
		});

	});
}