/*var a;
function getName() {
  a = document.getElementById('username').value;
  window.alert(a);
}*/

var b;
function getName() {
  //get value from input field and save as b
  b = document.getElementById('username').value;
  document.getElementById("username").value="";
  //create LS key with value of 'b'
  localStorage.setItem('uName', b);
  //automatically take user to page two.html
  location.href = "two.html";
}

function getUser() {
  var c = localStorage.getItem('uName');
  document.getElementById('placeholder').innerHTML = "Hello" + c;
}

