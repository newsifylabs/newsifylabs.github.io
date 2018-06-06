$( document ).ready(function() {


  var $nameInput = $("#name-input");
  var saveButton = document.getElementById("continue-button");
  var checkboxes = document.getElementsByClassName("checkbox");
  var signupBody = document.getElementById("signup-body");
  var categoryArray = [];
  var i;
  var k;

  var business = document.getElementById("business");
  var sports = document.getElementById("sports");
  var tech = document.getElementById("tech");
  var politics = document.getElementById("politics");
  var culture = document.getElementById("culture");
  var general = document.getElementById("general");
  var namere = /^[A-Za-z]+$/;

localStorage.clear();

  saveButton.onclick = function() {
    if(document.querySelectorAll('input[type="checkbox"]:checked').length > 0 && $nameInput.val().match(namere) && $nameInput.length > 0) {
      localStorage.setItem("hasVisited", true);
      if(business.checked == true){
        localStorage.setItem("business", business.checked);
      }
      if(sports.checked == true){
        localStorage.setItem("sports", sports.checked);
      }
      if(tech.checked == true){
        localStorage.setItem("tech", tech.checked);
      }
      if(politics.checked == true){
        localStorage.setItem("politics", politics.checked);
      }
      if(culture.checked == true){
        localStorage.setItem("culture", culture.checked);
      }
      if(general.checked == true){
        localStorage.setItem("general", general.checked);
      }
    saveButton.href = "article.html";
  }
  else {
    console.log("great");
  }
  };
  // console.log(localStorage.getItem("testItem"));
  // localStorage.removeItem("testItem");
});
