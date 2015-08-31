
//Document ready - Just makes to call to getPhrases
$(function(){
	getPhrases();
});

//making sure my updateButton doesn't get up to any funny business
$('#updateButton').click(function(e){
	e.preventDefault();
});

//makes AJAX GETrequest for all phrases, runs each phrase though the template, and displays the result.
function getPhrases(){
	$.get('/phrases', function(req, res){
		var template = _.template($('#phrase_template').html());
		req.forEach(function(phrase){
			$('#phrase_placeholder').append(template(phrase));
		});
	});
};

//sends the ID of the word to be deleted as a URL parameter via AJAX DELETE.
//refreshes page after delete has been perfromed
function deleteWord(context){
	$.ajax({
		url: "/phrases/" + $(context).data()._id,
		type: "DELETE",
		success: function(){
			window.location.reload();
		}
	})
};

//sends the update object in the body of an AJAX PUT
//refreshes page to display result
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
	});
};

//Presentation functions
function toggleHide(divId){
	$(divId).toggleClass('hidden');
};

function addGreen(liId){
	var idString = "#" + liId;
	$(idString).removeClass('red');
	$(idString).addClass('green');
};

function addRed(liId){
	var idString = "#" + liId;
	$(idString).removeClass('green');
	$(idString).addClass('red');
};




