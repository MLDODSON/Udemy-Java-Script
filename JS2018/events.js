var default_message = "Give It To Me Baby!";

window.onload = function() {
	document.body.style.backgroundColor = "lightgrey";
	message.innerHTML = default_message;
};

var on_body_click = function() {
	var color = document.body.style.backgroundColor;
	var new_color = (color !== "white") ? "white" : "lightgrey";
	document.body.style.backgroundColor = new_color;
};

var infield =  document.getElementById("infield");

var infield_keypress = function(event) {
	message.innerHTML = event.keyCode;
};

infield.addEventListener("keypress", infield_keypress);

infield.addEventListener("change", function() {
	message.innerHTML ="New value: " + event.target.value;
});


document.getElementById("reset").onclick = function() {
	message.innerHTML = default_message;
};


infield.onmouseover = function(event) {
	message.innerHTML = "Just moused over the input field";
};

infield.onmouseout = function(event) {
	message.innerHTML = "Just moused out";
};