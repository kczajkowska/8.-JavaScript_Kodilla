var a = prompt('Wpisz liczbę a'),
	b = prompt('Wpisz liczbę b'),
	value;

value = (a * a) + (2 * a * b) - (b * b);

if ( value > 0 ) {
	console.log('Wynik dodatni');
}
else if ( value < 0 ) {
	console.log('Wynik ujemny');
}
else {
	console.log('Wynik równy 0');
}

console.log (value);