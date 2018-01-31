var imie;
imie = "Janusz";
var nazwisko = "Kowal";
//+ konkatenacja
document.write("Imię: " + imie);
document.write("<br>Nazwisko: " + nazwisko);

var wiek = 15;
if(wiek>=18){
    document.write("<br>Jesteś pełnoletnia");
}else if(wiek<15){
    document.write("<br>Jesteś dzieckiem");
    }
else{
    document.write("<br>Nie jesteś pełnoletnia")
}

var x, y;
x = 9;
y = 10;
var suma = x + y;
alert("Suma wynosi " + suma);
var roznica = x - y;
var dzielenie = x / y;
mnozenie = x * y;
var modulo = x % y;

console.log(modulo);
