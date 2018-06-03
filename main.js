// Fetching api key
var apikey = config.API_KEY;

var menubutton = document.getElementById("menubutton");

window.onload = function() {
  menubutton.onclick = function(){
    myFunction();
  };
  function myFunction() {
    console.log("hej");
  }
};
