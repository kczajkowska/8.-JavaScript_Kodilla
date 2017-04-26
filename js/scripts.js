var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(11,15),
	triangle3Area = getTriangleArea(0,5);


function getTriangleArea(a, h) {
	if (a > 0 == h > 0) {
		return (a*h/2)
	}
	else {
		console.log('Nieprawidłowe dane')
	}
}

console.log( 'Pole trójkąta 1 ' + triangle1Area );
console.log( 'Pole trójkąta 2 ' + triangle2Area );
console.log( 'Pole trójkąta 3 ' + triangle3Area );