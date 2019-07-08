var namesOfFootballers = ["Messi", "Neymar", "Iniesta"];
console.log(namesOfFootballers[0]);
console.log(namesOfFootballers[1]);
console.log(namesOfFootballers[2]); /* Tablica z wartościami string, aby wartości w konsoli przedstawić po 
kolei należy wywołać po kolei każdy element tablicy, pierwszy element ma wartość 0 */

var favouriteFruits = ["banana", "orange", "apple", "pineapple", "mango", "strawberry", "raspberry"];
console.log(favouriteFruits[0]);
console.log(favouriteFruits[favouriteFruits.length - 1]); /*Konsola zwraca ostatni owoc, długość length zaczyna
liczyć od 1 dlatego odejmujemy od funkcji length 1 */
for (var i=0; i < favouriteFruits.length; i++) {
	console.log(favouriteFruits[i]); /* Zmienna var ma wartość 0 jak pierwszy element tablicy, a powtórzenia pętli
	nie mogą przekraczać ilości elementów tablicy w tym przypadku 7 */
}

var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for (var i=1; i < 11; i++) {
	console.log(sum=sum+i); /* Zaczynamy od i=1 bo już suma ma wartość 0 i dodajemy kolejne elementy pętli */
}

var myNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

for (var i = 1; i < myNumbers1.length; i += 2) {
	if (myNumbers1[i] % 2 === 0) {
		sum += myNumbers1[i];
	}
}							// W tej pętli skoro zadaniem jest wyliczyć sumę liczb parzystych
							// można użyć i=1, ponieważ jest to pierwsza liczba parzysta oraz 
							// i += 2, aby pętla robiła itinerację co 2 elementy tablicy z racji
							// parzystości.

console.log(sum); // Suma wszystkich liczb parzystych tej tablicy wynosi 30


var numbers = [12, 24, 11, 35, 78, 97, 89, 98, 67, 56];
var max = 0;

for (var i= 0; i < numbers.length; i++) {
if (max <= numbers[i]) {
	max = numbers[i];
}
}
console.log(max); // Robimy pętle przypisując, że zmienna max ma przybierać wartość najwyższą
// i wtedy zapisywać taką wartość. Pętla robiąc itinerację na kolejnych wartościach tablicy 
// znajduje, że najwyższą wartością jest 98.




var arrWithNumbers = [4, 3, 7, 0, 9, 5, 2, 2, 1, 8];
var firstIndex = 0;

for (var i=0; i < arrWithNumbers.length; i++) {
	for (var j=i+1; j < arrWithNumbers.length; j++) {
		if (arrWithNumbers[i] === arrWithNumbers[j]) {
			firstIndex = i;
			break;
		}
	}
	if(firstIndex >0) break;
}
console.log(firstIndex); // Początkowa wartość zmiennej firstIndex wynosi 0
// Jeśli pierwsza pętla, która sprawdza wartości tablicy jedną po drugiej
// będzie równa z pętlą, która sprawdza wartość jedną do przodu, czyli inaczej
// pierwszą która może się powtórzyć, zmiennej firstIndex przypisana jest wartość i
// i pętla zostaje przerwana, następnie po spełnieniu warunku znalezienia powtarzającej
// się liczby o indeksie większym niż 0 pętla ulega ponownemu przerwaniu. Konsola zwraca
// wartość indeksu 6, ponieważ to 6 cyfra z tablicy czyli 2 jest pierwszą, która się powtarza



var arrFromBehind = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];


for (var i = arrFromBehind.length - 1; i>=0; i--) {
	console.log(arrFromBehind[i]);
} // Poprzez itinerację od pierwszej do ostatniej wartości tablicy oraz nadanie 
// warunku kończącego pętle (ma to być w momencie dojścia do pierwszej cyfry) 
// pętla schodzi od końca do początku 9 razy bo tyle jest elementów tablicy przy pierwszym
// warunku którego indeks wynosi 0.

