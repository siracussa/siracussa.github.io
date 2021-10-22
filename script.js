var a = []
function save() {
  //get value
  var b = document.getElementById('word').value;
   a.push(b);
   //clears field
  document.getElementById('word').value='';
}
 window.alert(a);
