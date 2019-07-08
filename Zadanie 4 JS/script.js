var myNumber = 7;
var number = 14;
if (myNumber > number) {
	console.log(myNumber);
} else {
		console.log(number); 
	} // zmienna myNumber nie jest większa a zatem konsola wybiera opcję else i zwraca wartość 14.
	
var liczba1 = 36;
var liczba2 = 24;
var liczba3 = 12;

if (liczba1 > liczba2) {
	console.log(liczba1);
} else if (liczba2 > liczba3) {
	console.log(liczba2);
} else {
	console.log(liczba3);
} // Po przeanalizowaniu instrukcji warunkowej konsola zwraca jako najwyższą liczbę1, czyli 36

for (var i=0; i<10; i=i+1) {
	console.log("Lubie JavaScript");
}

var result = 0;
for (var i=1; i<11; i++) {
	console.log(result=result+i);
}


var n = 5;
for (var i=0; i <= n; i++) {
	console.log(i);
	if (i % 2 == 0) {
		console.log("parzysta");
	} else {
		console.log("nieparzysta"); 
	}
}

var i;
var j;
for (var i=0; i<2; i++) {
	for(var j=0; j<3; j++) {
		console.log("i="+i+", j="+j);
	}
}


var size_x = 5;
var size_y = 1;
var lineOfStars = "";

for (var i=0; i<size_y; i++) {
	for (var j=0; j<size_x; j++) {
		lineOfStars += "* ";
		console.log(lineOfStars);
	}
} /* Zadanie zrobione na podstawie pętli zagnieżdżonych, pętla zewnętrzna odnosząca się do
ilości kolumn, konkretnie jednej gdyż jest tylko jedna pełna kolumna, od której zaczynamy oraz 
pętla wewnętrzna, która odnosi się do wierszy, których jest 5. Wraz z kolejnymi itineracjami dochodzą 
kolejne gwiazdki we wierszach, aż do momentu niespełnienia warunku kiedy to nie dochodzi do kolejnych
itineracji. */
    
