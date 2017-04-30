var txt = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();

console.log(animalUpperCased);

var txtCharsAfter = txt.replace ('Papugi', animalUpperCased);
console.log(txtCharsAfter);

console.log(txtCharsAfter.length/2); 

var txtCharsAfter2 = txtCharsAfter.substr(0,txtCharsAfter.length/2);
console.log(txtCharsAfter2);