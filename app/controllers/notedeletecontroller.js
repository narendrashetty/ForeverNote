ForeverNote.controller('NoteDeleteController', [
	'$scope',
	'$location',
	'$routeParams',
	'NoteService',
	function ($scope, $location, $routeParams, NoteService) {
		NoteService.deleteNote($routeParams.noteId);
		$location.path('/');
	}]);