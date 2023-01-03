document.getElementById('demo').innerHTML="Hello world"
document.getElementsByTagName("div").innerHTML="Divs"
const x =document.forms["frm1"];
let text="";
for (let i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("form").innerHTML = text;
 function myfunction(){
    document.getElementById("p2").style.color = "red";
    document.getElementById("p2").style.fontFamily = "Arial";
    document.getElementById("p2").style.fontSize = "larger";
 }
 function mover(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mout(obj) {
    obj.innerHTML = "Mouse Over Me"
  }
  function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }