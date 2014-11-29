ForeverNote.controller('NoteAddController', [
	'$scope',
	'$location',
	'NoteService',
	function ($scope, $location, NoteService) {
		var self = this;
		$scope.save = function () {
			NoteService.addNote(this.note);
			$location.path('/');
		};
	}]);