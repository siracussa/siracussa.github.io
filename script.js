/*var a;
function getName() {
  a = document.getElementById('username').value;
  window.alert(a);
}
/*
var fieldValue;
function getName() {
  //get value from input field and save as b
  fieldValue = document.getElementById('username').value;
  document.getElementById("username").value="";
  //create LS key with value of 'fieldValue'
  localStorage.setItem('uName', fieldValue);
  //automatically take user to page two.html
  location.href = "two.html";
}

function getUser() {
  var c = localStorage.getItem('uName');
  document.getElementById('placeholder').innerHTML = "Hello, " + c;
} */

function saveName() {
  var fieldValue = document.getElementById('textfield').value;
  localStorage.setItem('userName', fieldValue)'
  window.location.href = 'two.html';
}

  
