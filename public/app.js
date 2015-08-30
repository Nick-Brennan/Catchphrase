$(function(){
	getPhrases();
});

$('#updateButton').click(function(e){
	e.preventDefault();
});

function getPhrases(){
	$.get('/phrases', function(req, res){
		var template = _.template($('#phrase_template').html());
		console.log(req);
		req.forEach(function(phrase){
			$('#phrase_placeholder').append(template(phrase));
		});

	});
};

function deleteWord(context){
	console.log($(context).data()._id);
	$.ajax({
		url: "/phrases/" + $(context).data()._id,
		type: "DELETE",
		success: function(){
			window.location.reload();
		}
	})
};

function updateWord(){
	$('#updateButton').click(function(e){
		e.preventDefault();
	});
	var wordToUpdate = $('#word').val();
	var newDefinintion = $('#definition').val();
	var updateObj = {word: wordToUpdate, definition: newDefinintion};

	$.ajax({
		url: "/phrases/",
		type: "PUT",
		data: updateObj,
		success: function(){
			window.location.reload();
		}
	})
}