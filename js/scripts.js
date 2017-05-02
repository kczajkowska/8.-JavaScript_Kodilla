var n = prompt ('Podaj wysokość choinki');

function drawTree(n) {
	for ( var i = 1 ; i <= n; i++) {
		var star = '*';
			for ( var j = 1 ; j <= i-1; j++) {
			star += '*';
			}
		console.log(star);
		}

}

drawTree(n);