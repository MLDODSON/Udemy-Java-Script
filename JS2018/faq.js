function insertQuestions()
{
	var xmlhttp = new XMLHttpRequest();
	var url = "faq_list.json";
	
	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.readyState === 4 && xmlhttp.status === 200) 
		{
			var myJsonObjectArray = JSON.parse(xmlhttp.responseText);
			var html_text = "";
			for (var i in myJsonObjectArray)
			{
				var template = list_item_template;
				template = replaceAll(template, "{id}", myJsonObjectArray[i].id);
				template = replaceAll(template, "{question}", myJsonObjectArray[i].question);
				template = replaceAll(template, "{answer}", myJsonObjectArray[i].answer);
				html_text += template;
			}
			document.getElementById("question_list").innerHTML = html_text;
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}



function onClickShowAll()
{
	var questions = document.getElementById("question_list").children;
	for(var i = 0; i < questions.length; i++)
		{
			questions[i].children[1].style.display = "inline-block";
		}
}

function onClickHideAll()
{
	var questions = document.getElementById("question_list").children;
	for(var i = 0; i < questions.length; i++)
		{
			questions[i].children[i].style.display = "none";
		}
}