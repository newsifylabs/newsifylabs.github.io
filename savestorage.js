$( document ).ready(function() {

  var saveButton = document.getElementById("continue-button");
  var checkboxes = document.getElementsByClassName("checkbox");
  var categoryArray = [];
  var i;
  var k;


  //spara kategori som true om den är checked.


  var business = document.getElementById("business");
  var sports = document.getElementById("sports");
  var tech = document.getElementById("tech");
  var politics = document.getElementById("politics");
  var culture = document.getElementById("culture");
  var general = document.getElementById("general");

  saveButton.onclick = function() {
    localStorage.setItem("business", business.checked);
    localStorage.setItem("sports", sports.checked);
    localStorage.setItem("tech", tech.checked);
    localStorage.setItem("politics", politics.checked);
    localStorage.setItem("culture", culture.checked);
    localStorage.setItem("general", general.checked);
  };
  // console.log(localStorage.getItem("testItem"));
  // localStorage.removeItem("testItem");
});
