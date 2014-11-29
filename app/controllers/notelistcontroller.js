ForeverNote.controller('NoteListController', [
	'$scope',
	'$location',
	'NoteService',
	function ($scope, $location, NoteService) {
		$scope.notes = NoteService.getAllNotes();
	}]);