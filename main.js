// Fetching api key
var apikey = config.API_KEY;

$( document ).ready(function() {
  var sidebar = document.getElementById("sidebar");
  var menuButton = document.getElementById("menubutton");
  var closeButton = document.getElementById("closebutton");
  var clearStorage = document.getElementById("clear-storage");
  var readMore = document.getElementById("read-more");
  var next = document.getElementById("next");
  var nextButton = document.getElementById("next-article");
  var headline = document.getElementById("headline");
  var description = document.getElementById("description");
  var articleImage = document.getElementById("article-img");
  var whiteFill = document.getElementById("whitefill");
  var nightMode = document.getElementById("night-mode");
  var articleBody = document.getElementById("article-body");
  var articleHeader = document.getElementById("article-header");
  var articleText = document.getElementById("article-text");
  var sidebarAbout = document.getElementById("sidebar-about");
  var sidebarContact = document.getElementById("sidebar-contact");

  whiteFill.innerHTML = "Just a second " + localStorage.getItem("name") + ", preparing your news.";

  var business;
  var sports;
  var tech;
  var politics;
  var culture;
  var general;

  var imgArray = [];
  var urlArray = [];
  var businessURL = "https://newsapi.org/v2/top-headlines?category=business&country=us&pageSize=3&apiKey=c75b8f0f6ebd4b2c89fd0d31cb69e6bd";
  var sportsURL = "https://newsapi.org/v2/top-headlines?category=sports&country=us&pageSize=3&apiKey=c75b8f0f6ebd4b2c89fd0d31cb69e6bd";
  var techURL = "https://newsapi.org/v2/top-headlines?category=technology&country=us&pageSize=3&apiKey=c75b8f0f6ebd4b2c89fd0d31cb69e6bd";
  var politicsURL = "https://newsapi.org/v2/top-headlines?q=politics&pageSize=3&apiKey=c75b8f0f6ebd4b2c89fd0d31cb69e6bd";
  var cultureURL = "https://newsapi.org/v2/top-headlines?category=entertainment&country=us&pageSize=3&apiKey=c75b8f0f6ebd4b2c89fd0d31cb69e6bd";
  var generalURL = "https://newsapi.org/v2/top-headlines?category=general&country=us&pageSize=3&apiKey=c75b8f0f6ebd4b2c89fd0d31cb69e6bd";

  if(localStorage.getItem("business") != null){
    business = true;
    urlArray.push(businessURL);
    imgArray.push("assets/business.jpg");
  }
  if(localStorage.getItem("sports") != null){
    sports = true;
    urlArray.push(sportsURL);
    imgArray.push("assets/sports.jpg");
  }
  if(localStorage.getItem("tech") != null){
    tech = true;
    urlArray.push(techURL);
    imgArray.push("assets/tech.jpg");
  }
  if(localStorage.getItem("politics") != null){
    politics = true;
    urlArray.push(politicsURL);
    imgArray.push("assets/politics.jpg");
  }
  if(localStorage.getItem("culture") != null){
    culture = true;
    urlArray.push(cultureURL);
    imgArray.push("assets/culture.jpg");
  }
  if(localStorage.getItem("general") != null){
    general = true;
    urlArray.push(generalURL);
    imgArray.push("assets/general.jpg");
  }

  var headlines = [];
  var descs = [];
  var imgs = [];
  var sources = [];
  var links = [];
  var authors = [];
  var x = 0;

  var url;
  var currentImg;
  var urlCount=0;
  var imgCount=0;

  testFunction();
  myFunction();

  function myFunction() {
    myVar = setTimeout(showPage, 1000);
  }
  function showPage() {
    whiteFill.style.display = "none";
  }
  nextButton.onclick = function() {
    if(x<2) {
      x++;
    }else if(urlCount<urlArray.length-1){
        urlCount++;
        imgCount++;
        x=0;
      }
      if(urlCount === urlArray.length-1 && x===2) {
        nextButton.style.display = "none";
        next.innerHTML = "Nothing more to read, back to work!";
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
      links[x] = data.articles[x].url;
      authors[x] = data.articles[x].author;
      articleImage.src = imgArray[imgCount];
      articleImage.onerror = function() {
        articleImage.style.display = "none";
      };
      headline.innerHTML = headlines[x];
      readMore.href = links[x];
      description.innerHTML = descs[x] + " (" + authors[x] + " for " + sources[x] + ")";

      if(data.articles[x].title.length > 65) {
        headline.style.fontSize = "32px";
      }
    });
  };
clearStorage.onclick = function() {
  localStorage.clear();
  console.log("xd");
};
  // console.log(localStorage.getItem("sports"));

  // Sätter sidebarens position.
  sidebar.style.left = "-300px";


  var nightBoolean = false;
  nightMode.onclick = function() {
    if(nightBoolean === false) {
      nightBoolean = true;
      articleBody.style.background = "black";
      articleHeader.style.color = "white";
      articleText.style.color = "white";
      articleText.style.background = "black";
      sidebar.style.color = "white";
      sidebarAbout.style.color = "white";
      sidebarContact.style.color = "white";
      clearStorage.style.color = "white";
      sidebar.style.background = "#212121";
    }
    else {
      nightBoolean = false;
      articleBody.style.background = null;
      articleHeader.style.color = null;
      articleText.style.color = null;
      articleText.style.background = null;
      sidebar.style.color = null;
      sidebarAbout.style.color = null;
      sidebarContact.style.color = null;
      clearStorage.style.color = null;
      sidebar.style.background = null;
    }
  };

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

  // Döljer sidebar vid escape klick
  $(document).keyup(function(e) {
    if(e.keyCode == 27){
      sidebar.style.left = "-300px";
      sidebar.style.boxShadow = "none";
    }
  });
});
