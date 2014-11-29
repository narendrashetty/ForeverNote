ForeverNote.controller('NoteListController', ['$scope', 'NoteService', function ($scope, NoteService) {
	$scope.notes = NoteService.getAllNotes();
}]);