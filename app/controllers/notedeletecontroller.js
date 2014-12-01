ForeverNote.controller('NoteDeleteController', [
	'$scope',
	'$location',
	'$routeParams',
	'NoteService',
	function ($scope, $location, $routeParams, NoteService) {
		$('.noteViewer').removeClass('moveRight');
		$('#noteBrowser').removeClass('moveRight');
		$('.hamburgerContainer').removeClass('moveRight');
		NoteService.deleteNote($routeParams.noteId);
		$location.path('/');
	}]);