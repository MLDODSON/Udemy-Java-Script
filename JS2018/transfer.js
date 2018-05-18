function getData()
{
	var xmlhttp = new XMLHttpRequest();
	var url = "network_transfer.json";
	
	xmlhttp.onreadystatechange = function()
	{
		if (xmlhttp.readyState === 4 && xmlhttp.status === 200) 
		{
			var myArr = JSON.parse(xmlhttp.responseText);
			insertData(myArr);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}




function insertData(data) 
{
	var output = "";
	for (var item in data)
	{
		var element = document.getElementById("article_" + data[item].id);
		element.innerHTML = data[item].text;
	}
}

