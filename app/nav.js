$(function () {
	var $ham = $('.hamburgerContainer');

	$ham.click(function () {
		$('.noteViewer').toggleClass('moveRight');
		$('#noteBrowser').toggleClass('moveRight');
		$(this).toggleClass('moveRight');
	});
});