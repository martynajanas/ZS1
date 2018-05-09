
//document.write('<div id="wyswietl">');
    var wyswietl = document.getElementById('wyswietl');
  var x = prompt("Podaj wartość początkową");
var y = prompt("Podaj wartość końcową");
  
  document.write('<input type="radio" checked name="sort" id="r">rosnąco');
document.write('<input type="radio" name="sort" id="m">malejąco'); 
  var text="";
function spr(){
  let text=""
  if (r.checked == true){
    for (var z=x; z<=y; z++){
      text +=z;
      //console.log(text);
    }
}  else if (m.checked == true){
    for (var z=y; z>=x; z--){
      text +=z;
      //console.log(text);
    }}
    wyswietl.textContent = text;
    }
r.addEventListener('click', spr);
m.addEventListener('click', spr);