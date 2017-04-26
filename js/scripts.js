var names = [];
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = names.concat(femaleNames, maleNames);


console.log(allNames);

var newName ='Marian'

if (allNames.indexOf(newName) === -1) {
	var x = allNames.push(newName)
}
console.log(x);
console.log(allNames);