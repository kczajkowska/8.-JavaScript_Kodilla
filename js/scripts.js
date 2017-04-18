var a,
	b,
	value;

value = (a * a) + (2 * a * b) - (b * b);
console.log( + value );

if ( value > 0 ) {
	console.log ('Wynik dodatni');
}
else if ( value < 0 ) {
	console.log ('Wynik ujemny');
}

( value == 0) ? 'Wynik równy 0' : 'Wynik różny od 0';
console.log(value);