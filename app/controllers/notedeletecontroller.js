// A controller to delete a new note
ForeverNote.controller('NoteDeleteController', [
	'$scope',
	'$location',
	'$routeParams',
	'NoteService',
	function ($scope, $location, $routeParams, NoteService) {
		// reset the left nav and note viewer position
		$('.noteViewer').removeClass('moveRight');
		$('#noteBrowser').removeClass('moveRight');
		$('.hamburgerContainer').removeClass('moveRight');
		// data sent to service to delete a note
		NoteService.deleteNote($routeParams.noteId);
		$location.path('/');
	}]);