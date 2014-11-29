ForeverNote.controller('NoteAddController', [
	'$scope',
	'$location',
	'NoteService',
	function ($scope, $location, NoteService) {
		$scope.save = function () {
			NoteService.addNote(this.note);
			$location.path('/');
		};
		$scope.cancel = function () {
			$location.path('/');
		};
	}]);