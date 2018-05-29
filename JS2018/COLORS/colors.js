window.onload = function() 
{
	displayColors();
};

var colors = ['green', 'aqua', 'teal', 'silver', 'gray', 'black', 'navy', 'fuchsia', 'purple', 'red', 
			 'maroon', 'yellow', 'olive', 'lime', 'blue'];

function displayColors() 
{
	var color_divs = "";
	var template = "<div id={color} class='color' style='background-color:{color};'>{color}</div>";
	for (var i in colors) 
	{
	 color_divs += replaceAll(template, "{color}", colors[i]);	
	}
	document.getElementById("color_picker").innerHTML = color_divs;
}

document.getElementById("color_picker").onclick = function() 
{
	var color = event.target.innerHTML;
	color_target.style.backgroundColor = color;
	document.getElementById("color_picker").style.display = "none";
};

document.getElementById("color_target").onclick = function() 
{
	document.getElementById('color_picker').style.display = "inline-block";
};

// Utility function for replacement
function replaceAll(text_string, to_replace, replacement) 
{
	var result = text_string;
	while (result.search(to_replace) !== -1) 
	{
		result = result.replace(to_replace, replacement);
	}
	return(result);
}


