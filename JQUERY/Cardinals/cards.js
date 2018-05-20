$(".question").click(function() {
	$(this).next().fadeToggle("slow");
	$(this).children().toggleClass("collapse");
});