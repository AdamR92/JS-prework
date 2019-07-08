var isOver = false;
var isChecked = true;

console.log(isOver == isChecked); // Konsola oddaje wartość false, zmienne nie są sobie równe

var liczba1 = 14;
var liczba2 = 8;
var resultModulo = 0;

console.log(liczba1 % liczba2);

resultModulo = 6;

console.log(resultModulo); // Konsola przechowuje wartość 6 zmiennej resultModulo

var text1 = "Ala ma kota";
var text2 = "a kot ma zabawki";
var joinedStrings = ""

console.log(text1 + text2);

joinedStrings="Ala ma kota a kot ma zabawki"

console.log(joinedStrings); // Konsola oddaje nową wartość zmiennej joinedStrings

var myNumber = 4;
var myString = "4";

console.log(myNumber == myString); // True, ponieważ jest ta sama wartość
console.log(myNumber === myString); // False, ponieważ pomimo tej samej wartości są różnego typu

var counter = 145;
console.log(counter);
counter = counter + 1;
console.log(counter); // Po inkrementacji nowa wartość zmiennej counter to 146;
counter = counter - 1;
console.log(counter); // Po dekrementacji wartość zmiennej wróciła do wartości początkowej i wynosi 145

var number = 77;
var myNumber = 99;
var result = null;

console.log(number > myNumber);

result = number > myNumber;

console.log(result); // Konsola zwraca wartość false zmienna number nie jest większa od zmiennej myNumber
