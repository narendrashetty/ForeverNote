ForeverNote.controller('NoteAddController', [
	'$scope',
	'$location',
	'NoteService',
	function ($scope, $location, NoteService) {
		$scope.note = {};
		$scope.note.tags = [];
		$scope.save = function () {
			var noteId = NoteService.addNote(this.note);
			$location.path('/note/' + noteId);
		};
		$scope.cancel = function () {
			$location.path('/');
		};
	}]);