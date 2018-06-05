// Fetching api key
var apikey = config.API_KEY;




var sidebar = document.getElementById("sidebar");
var menuButton = document.getElementById("menubutton");
var closeButton = document.getElementById("closebutton");
var nextButton = document.getElementById("next-article");
var headline = document.getElementById("headline");
var description = document.getElementById("description");
var articleImage = document.getElementById("articleimage");

var business = "&category=business";
var technology = "&category=technology";
var culture = "&category=culture";
var sports = "&category=sports";
var general = "&category=general";
var politics = "&category=politics";

var url = "https://newsapi.org/v2/top-headlines?country=de" + business + "&apiKey=c75b8f0f6ebd4b2c89fd0d31cb69e6bd";
$.getJSON('url', function(data){
  console.log(data.articles[0].description);
});

console.log(localStorage.getItem("sports"));



// Sätter sidebarens position.
sidebar.style.left = "-300px";

// Ändrar positionen på sidebar från -300px till 0px.
menuButton.onclick = function() {
  if(sidebar.style.left === "-300px"){
    sidebar.style.left = "0px";
    sidebar.style.boxShadow = "0px 0px 56px 0 rgba(0,0,0,0.32)";
  }
};

// Flyttar tillbaka sidebaren ut ur skärmen.
closeButton.onclick = function() {
  if(sidebar.style.left === "0px"){
    sidebar.style.left = "-300px";
    sidebar.style.boxShadow = "none";
  }
};
