$(document).ready(function() {
	$("#contain").mouseenter(function() {
		$("#slide").slideDown();
		setTimeout(function() {
			$("#comment").css("background-color","rgba(240,240,240,0)");
		},150);
	}).mouseleave(function() {
		$("#slide").slideUp();
		setTimeout(function() {
			$("#comment").css("background-color","rgba(018,156,173,0.7)");
		},250);
	});

});
