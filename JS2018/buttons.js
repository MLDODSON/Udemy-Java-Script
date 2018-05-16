function setBackgroundToGrey() 
{
	document.body.style.backgroundColor = "lightgrey";
}

function clearBackground() 
{
	document.body.style.backgroundColor = "initial";
}

// Bind a function using id of the html element
document.getElementById("setbgcolor").onclick = function() 
{
	var color = document.getElementById("bgcolor").value;
	document.body.style.backgroundColor = color;
};

document.getElementById("getfullname").onclick = function() 
{
	var names = ["Mike Dodson", "Laurie Ann", "Chester Cheetah", "Pete Puma"];
	var first_name = document.getElementById("firstname").value;
	if (first_name && (first_name.length > 0)) 
	{
		for (var i in names) 
		{
			var full_name = names[i];
			if(full_name.toUpperCase().startsWith(first_name.toUpperCase())) 
			{
				document.getElementById("fullname").innerHTML = full name;
				return;	
			}
		}
	}
	document.getElementById("fullname").innerHTML = "Not found";
};