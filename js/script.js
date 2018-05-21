$(document).ready(function(){
    
   function appendBookToBody(searchTerm) {
    // this function appends an <img> to the body with the
    // URL provided in the parameters
    $("body").html("<div>" + searchTerm + "</div>);
}

// DO NOT MODIFY ABOVE THIS LINE. READ THE COMMENTS BELOW TO COMPLETE THE FUNCTIONS.

// write a function that will return a url for the giphy API with
// the searchTerm provided in the parameters
function bookURLWithSearchTerm(searchTerm) {
    return "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm;
}

function callBookAPIWithSearchTerm(searchTerm) {
    $.ajax({
        url: bookURLWithSearchTerm(searchTerm),
        method: "GET",
        success: function(response) {
       
            var url = response.data;
            // call the appendImageToBody function to add the image to the page
            appendBookToBody(url);
            
      },
    }); 
}

// Fix the click handler so that callGiphyAPIWithSearchTerm is called with the user's input
function search() {
    var searchTerm = $("input").val();
    callBookAPIWithSearchTerm(searchTerm);
    
}

$("button").click(function (){
    return search();
});
$(document).keydown(function (e)  {
    var key = e.which;
    if (key===13){
      return search();
        
    }
}
  
);

$("#about").click(function() { 
  
    
});


});