ForeverNote.controller('NoteEditController', [
	'$scope',
	'$location',
	'$routeParams',
	'NoteService',
	function ($scope, $location, $routeParams, NoteService) {
		$scope.note = NoteService.getNote($routeParams.noteId);
		$scope.save = function () {
			NoteService.editNote(this.note.id, this.note);
			$location.path('/');
		};
	}]);