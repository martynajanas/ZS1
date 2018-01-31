var a = 10; b = "3c";
var wynik = a + b;
//alert(wynik);
//alert(a+b);
console.log("tekst");
console.log(a); //number
console.log(typeof(a)); //string
console.log(typeof(a+b)); //string

console.trace();

var _zmienna1 = 10;
//var 3liczba = 10; //błędna nazwa zmiennej
var zmiennaZmiennoprzecinkowa = 2.5;
console.log(zmiennaZmiennoprzecinkowa);
console.log(typeof(zmiennaZmiennoprzecinkowa));

//int integer liczba całkowita np. 3 (c++)
//float zmiennoprzecinkowa np. 3.5 (c++)

//bool

var prawda = true;
var falsz = false;
console.log(typeof(prawda)); //boolean

//string

var tekst = "Janusz";
console.log(typeof(tekst)); //string

//undefined

var imie;
console.log(imie); //undefined
var imie = "Sandra";
console.log(imie);
console.log(typeof(Sandra)); //string
//object

var tablica = ["Janusz", "Anna", "Krysia"];
console.log(tablica);

//♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥

var liczba1 = prompt("Podaj pierwszą liczbę");
var liczba2 = prompt("Podaj drugą liczbę", "np. 3.4");
var suma = liczba1 + liczba2; //konkatenacja
//parseInt - liczby całkowite
//liczba1 = parseInt(liczba1); 
//liczba2 = parseInt(liczba2);

//konwersja na typ zmiennoprzecinkowy
liczba1 = parseFloat(liczba1);
liczba2 = parseFloat(liczba2);
console.log(typeof(liczba1));
console.log(typeof(liczba2));
document.write(suma);

//zad.1
//*mama, tata oraz dziecko podają swój wiek z klawiatury
//na ekranie wyświetl w formacie:

//mama: ...lat
//tata: ...lat
//dziecko: ...lat
//średni wiek wynosi: ...lat

var mama = prompt("Podaj wiek mamy", mama," lat");
var tata = prompt("Podaj wiek taty", tata, " lat");
var dziecko = prompt("Podaj wiek dziecka", dziecko, " lat");
mama = parseInt(mama);
tata = parseInt(tata);
dziecko = parseInt(dziecko);
var wiekSredni = (mama + tata + dziecko)/3;
wiekSredni = wiekSredni.toFixed(2);
document.write("mama: " + mama + " lat<br>");
document.write("tata: " + tata + " lat<br>");
document.write("dziecko: " + dziecko + " lat<br>");
document.write("średni wiek: " + wiekSredni + " lat<br>");


