var nextTabLink = $("li.bordered").next().children("button");
$(document).ready(function () {
	$(nextTabLink).click(function (e) {
		e.preventDefault();
		console.log("IM IN");
		console.log($(this).parent().nextAll("li:visible"));
		if ($(this).parent().nextAll("li:visible")) {
			console.log(
				$(this).next().parent().nextAll("li:visible").first().children("a")
			);
		}
	});
});
