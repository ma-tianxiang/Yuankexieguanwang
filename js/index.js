 $(document).ready(function() {
	setTimeout(function() {
		$("#loading").fadeOut(1000);
	}, 2000);
	$("#clickBtn").click(function() {
		$("#headerList").toggle(1000);
	});
});