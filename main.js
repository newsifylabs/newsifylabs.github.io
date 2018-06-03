// Fetching api key
var apikey = config.API_KEY;


window.onload = function(){
  var sidebar = document.getElementById("sidebar");
  sidebar.style.left = "-300px";

  var menubutton = document.getElementById("menubutton");
  menubutton.onclick = function() {
    if(sidebar.style.left === "-300px"){
      sidebar.style.left = "0px";
      sidebar.style.boxShadow = "0px 0px 56px 0 rgba(0,0,0,0.32)";
    } else {
      sidebar.style.left = "-300px";
      sidebar.style.boxShadow = "none";
    }
  };
};
