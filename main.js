// Fetching api key
var apikey = config.API_KEY;

$( document ).ready(function() {

  var sidebar = document.getElementById("sidebar");
  var menuButton = document.getElementById("menubutton");
  var closeButton = document.getElementById("closebutton");
  var nextButton = document.getElementById("next-article");
  var headline = document.getElementById("headline");
  var description = document.getElementById("description");
  var articleImage = document.getElementById("article-img");
  var whiteFill = document.getElementById("whitefill");

  // var businessURL = "&category=business";
  // var technologyURL = "&category=technology";
  // var cultureURL = "&category=culture";
  // var sportsURL = "&category=sports";
  // var generalURL = "&category=general";
  // var politicsURL = "&category=politics";

  var business;
  var sports;
  var tech;
  var politics;
  var culture;
  var general;

  var urlArray = [];
  var businessURL = "https://newsapi.org/v2/top-headlines?category=business&country=us&pageSize=3&apiKey=c75b8f0f6ebd4b2c89fd0d31cb69e6bd";
  var sportsURL = "https://newsapi.org/v2/top-headlines?category=sports&country=us&pageSize=3&apiKey=c75b8f0f6ebd4b2c89fd0d31cb69e6bd";
  var techURL = "https://newsapi.org/v2/top-headlines?category=business&country=us&pageSize=3&apiKey=c75b8f0f6ebd4b2c89fd0d31cb69e6bd";
  var politicsURL = "https://newsapi.org/v2/top-headlines?category=politics&country=us&pageSize=3&apiKey=c75b8f0f6ebd4b2c89fd0d31cb69e6bd";
  var cultureURL = "https://newsapi.org/v2/top-headlines?category=culture&country=us&pageSize=3&apiKey=c75b8f0f6ebd4b2c89fd0d31cb69e6bd";
  var generalURL = "https://newsapi.org/v2/top-headlines?category=general&country=us&pageSize=3&apiKey=c75b8f0f6ebd4b2c89fd0d31cb69e6bd";

  if(localStorage.getItem("business") != null){
    business = true;
    urlArray.push(businessURL);
  }
  if(localStorage.getItem("sports") != null){
    sports = true;
    urlArray.push(sportsURL);
  }
  if(localStorage.getItem("tech") != null){
    tech = true;
    urlArray.push(techURL);
  }
  if(localStorage.getItem("politics") != null){
    politics = true;
    urlArray.push(politicsURL);
  }
  if(localStorage.getItem("culture") != null){
    culture = true;
    urlArray.push(cultureURL);
  }
  if(localStorage.getItem("general") != null){
    urlArray.push(generalURL);
    general = true;
  }
  // var obj = {
  //   business: localStorage.getItem("business"),
  //   sports: localStorage.getItem("sports"),
  //   tech: localStorage.getItem("tech"),
  //   politics: localStorage.getItem("politics"),
  //   culture: localStorage.getItem("culture"),
  //   general: localStorage.getItem("general")
  // }
  var headlines = [];
  var descs = [];
  var imgs = [];
  var sources = [];
  var x = 0;


  // var url = "https://newsapi.org/v2/top-headlines?category=general&country=us&pageSize=4&apiKey=c75b8f0f6ebd4b2c89fd0d31cb69e6bd";
  var url;
  var urlCount=0;

  testFunction();
  myFunction();

  function myFunction() {
    myVar = setTimeout(showPage, 1000);
  }
  function showPage() {
    whiteFill.style.display = "none";
  }

  // for(var i=0;i<urlArray.length;i++) {
  //   url = urlArray[i];
  // }

  nextButton.onclick = function() {
    console.log(x + "   " + urlCount + "   " + (urlArray.length-1));
    if(x<2) {
      x++;
    }else {
      if(urlCount<urlArray.length-1){
        urlCount++;
        x=0;
      }else{
        nextButton.style.display = "none";
      }
    }

    testFunction();
  };
  function testFunction() {

    url = urlArray[urlCount];
    $.getJSON(url, function(data){

      headlines[x] = data.articles[x].title;
      descs[x] = data.articles[x].description;
      imgs[x] = data.articles[x].urlToImage;
      sources[x] = data.articles[x].source.name;

      var imgString = imgs[x];
      articleImage.src = imgString;
      articleImage.style.display = "inline";
      articleImage.onerror = function() {
        articleImage.style.display = "none";
      };
      headline.innerHTML = headlines[x];
      description.innerHTML = descs[x] + " (" + sources[x] + ")";

      if(data.articles[x].title.length > 65) {
        headline.style.fontSize = "32px";
      }
    });
  };
  // console.log(localStorage.getItem("sports"));

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
});
