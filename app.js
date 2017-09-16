var topics = ["Hawk","Platypus","Orca","Lizard","Beetle","Leopard"];


// This function will render the buttons array at page load and when a new button is created
function renderButtons(){

  $("#animalButtons").empty();

  for (var i = 0; i < topics.length; i++){
    var button = $("<button>");
    button.addClass("animal");
    button.attr("data-name", topics[i]);
    button.text(topics[i]);
    $("#animalButtons").append(button);
  }

}



$("#addAnimal").on("click", function(){
  event.preventDefault();

  // gif variable grabs input from the textbox
  var gif = $("#animalInput").val().trim();
  topics.push(gif);

  //call renderButtons again to repopulate gifButton div
  renderButtons();
 
/****/
});//addAnimal on click function closer
/****/

renderButtons();

function getRating(gifObject){
  console.log(gifObject);
  var container = $("#gifsDiv").append("<div class='rating'>");
  var pTag = $("<p>");
  pTag.text("Rating: " + gifObject.rating);
  container.append(pTag);
  var gifTag = $("<img>");
  gifTag.attr("src", gifObject.images.fixed_height.url);
  container.append(gifTag);
  
 }

function ajaxCall(search){
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=10";
  
  $.ajax({
     url: queryURL,
     method: "GET"
  })
  .done(function(response){
   console.log(response.data); // array
    for (var j = 0; j < response.data.length; j++){
      getRating(response.data[j]);
      
    } 
   
    
  /****/
  });//.done function closer
  /****/
}// ajaxCall function closer


$(document.body).on("click", '.animal', function(){
$("gifsDiv").empty();
var search = $(this).attr("data-name");
console.log(search);

ajaxCall(search);

});