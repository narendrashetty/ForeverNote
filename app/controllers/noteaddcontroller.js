ForeverNote.controller('NoteAddController', [
	'$scope',
	'$location',
	'NoteService',
	function ($scope, $location, NoteService) {
		$scope.note = {};
		$scope.note.tags = [];
		$scope.save = function () {
			NoteService.addNote(this.note);
			$location.path('/');
		};
		$scope.cancel = function () {
			$location.path('/');
		};
	}]);