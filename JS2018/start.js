var begin = Date.now();
var eventLog = "";

function bodyLoaded() {
	log("The body section has now been loaded.");
}

window.onload = function() {
	log("The window has been loaded.(Handler1)");
};

window.addEventListener("load", function() {
	log("The window has been loaded.(Handler2)");
});

setTimeout(function() {document.getElementById("msg").innerHTML = eventLog;}, 2000);

function log(msg) {
	var now = Date.now() - begin;
	console.log(now + ": " + msg);
	eventLog += "<p>" + now + ": " + msg + "<p>";
}