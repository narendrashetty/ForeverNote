ForeverNote.controller('NoteViewerController', [
	'$scope',
	'$location',
	'$routeParams',
	'NoteService',
	function ($scope, $location, $routeParams, NoteService) {
		$scope.selectedNote = NoteService.getNote($routeParams.noteId);
		NoteService.getAllNotes();
		var allNotes = NoteService.allNotes;
		$scope.notesAvailable = allNotes.length;
		$scope.noteId = $routeParams.noteId === undefined ? ($scope.notesAvailable ? false : true) : true;
		$scope.modalShown = false;
		$('.noteViewer').removeClass('moveRight');
		$('#noteBrowser').removeClass('moveRight');
		$('.hamburgerContainer').removeClass('moveRight');
        $scope.toggleModal = function(noteId) {
        	$scope.modalShown = !$scope.modalShown;
        	if(noteId) {
	        	$scope.deleteNoteId = noteId;
	        }
        };
	}]);