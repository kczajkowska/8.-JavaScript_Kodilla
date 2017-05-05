var colors = document.getElementsByClassName('button'); 

console.log(colors);

for (var i = 0; i < colors.length; i++){
    alert(colors[i].innerText);
}