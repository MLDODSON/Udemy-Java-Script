function drawSquare(ctx, x, y, width, height) 
{
	//Stroke
	ctx.strokeStyle = "rgba(0,0,0,1)";
	ctx.lineWidth = 10;
	ctx.lineJoin = "round";
	ctx.strokeRect(x, y, width, height);
	
	//Fill
	ctx.fillStyle = "rgba(255,0,0,1)";
	ctx.fillRect(x, y, width, height);
}

function drawTriangle(ctx, x, y, side) 
{
	//Path
	ctx.beginPath();
	ctx.moveTo(x + side / 2,y);
	ctx.lineTo(x + side, y + side);
	ctx.lineTo(x, y + side);
	ctx.lineTo(x + side / 2, y);
	ctx.closePath();
	
	//Stroke
	ctx.strokeStyle = "rgba(0,0,0,1)";
	ctx.lineWidth = 10;
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.stroke();
	
	//Fill
	ctx.fillStyle = "rgba(0,255,0,1)";
	ctx.fill();
}

function drawCircle(ctx, x, y, radius) 
{
	//Path
	ctx.beginPath();
	ctx.arc(x + radius, y + radius, radius, 0, 360, false);
	ctx.closePath();
	
	//Stroke
	ctx.strokeStyle = "rgba(0,0,0,1)";
	ctx.lineWidth = 10;
	ctx.stroke();
	
	//Fill
	ctx.fillStyle = "rgba(0,0,255,1)";
	ctx.fill();
}

function drawText(ctx, text, x, y) 
{
	//Fill text
	ctx.fillStyle = "rgba(0,0,0,1)";
	ctx.font = "30px sans-serif";
	ctx.fillText(text, x, y, 300);
}









