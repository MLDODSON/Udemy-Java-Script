
window.onload = function() 
{
	document.getElementById("slider").onchange = setSlide;
	
	document.getElementById("control_left").onclick = onControlClick;
	document.getElementById("control_right").onclick = onControlClick;
};

function onControlClick(event)
{
	var control_right = document.getElementById("control_right");
	var control_left = document.getElementById("control_left");
	var slider = document.getElementById("slider");
	var position = slider.value;
	
	if (event.target === control_left)
		{
			if (position > 1) {position--;}
		}
	if (event.target === control_right)
		{
			if (position < 4) {position++;}
		}
	slider.value =  position;
	setSlide(position);
}

function setSlide(idx) 
{
	if (idx.target) { idx = idx.target.value; }
	
	var offset = "0px";
	if (idx === 1) {offset = "0px";}
	if (idx === 2) {offset = "-410px";}
	if (idx === 3) {offset = "-813px";}
	if (idx === 4) {offset = "-1218px";}
	document.getElementById("slide_container").style.marginLeft = offset;
}
