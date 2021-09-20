const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");
let boxAreas = []
function drawBoard(){
	let maxBoxSide = canvas.height/3
	let xOffset = canvas.width/2 - maxBoxSide * 1.5
	let yOffset = canvas.height/2 - maxBoxSide * 1.5
	for(let i=0; i<4; i++) {
		c.moveTo(xOffset, yOffset + maxBoxSide * i);
		c.lineTo(xOffset + maxBoxSide * 3, yOffset + maxBoxSide * i);
		c.moveTo(xOffset + maxBoxSide * i, yOffset);
		c.lineTo(xOffset + maxBoxSide * i, yOffset + maxBoxSide * 3);
	}
	c.strokeStyle = "black";
	c.stroke();
}

// canvas.addEventListener('mousemove',function(moved){
// 		console.log(moved);
// })
drawBoard();    
