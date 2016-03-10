$(document).ready(function(){
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm=$('#query').val();
		console.log(searchTerm);
		getRequest(searchTerm);
	});
});

function getRequest(searchTerm){
	console.log(searchTerm);
	var params={
		q:searchTerm,
		part:'snippet',
		key:'AIzaSyDuOT9kBWqwXQo1vfHwr3XwZ7qkYdEcvTo'
	}
	url='https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url,params,function(data){
		
		var resultsArray=data.items;
		var arrayLength=resultsArray.length;
		var html="";

		for(var i=0;i<arrayLength;i++){
			html +='<img src="http://img.youtube.com/vi/' + resultsArray[i].id.videoId + '/0.jpg">';
		}
		console.log(html);
		$('#search-results').html(html);
	});
};
