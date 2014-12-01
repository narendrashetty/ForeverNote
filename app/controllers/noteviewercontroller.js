// A controller to display a prticular note
ForeverNote.controller('NoteViewerController', [
	'$scope',
	'$location',
	'$routeParams',
	'NoteService',
	function ($scope, $location, $routeParams, NoteService) {
		// Get a note to display
		$scope.selectedNote = NoteService.getNote($routeParams.noteId);
		//update the latest notes from localstorage
		NoteService.getAllNotes();
		var allNotes = NoteService.allNotes;
		$scope.notesAvailable = allNotes.length;
		// Get the note id
		$scope.noteId = $routeParams.noteId === undefined ? ($scope.notesAvailable ? false : true) : true;
		// Modal initialization for delete confirmation
		$scope.modalShown = false;
		// reset the left nav and note viewer position
		$('.noteViewer').removeClass('moveRight');
		$('#noteBrowser').removeClass('moveRight');
		$('.hamburgerContainer').removeClass('moveRight');
		// method to toggle modal on/off
        $scope.toggleModal = function(noteId) {
        	$scope.modalShown = !$scope.modalShown;
        	if(noteId) {
	        	$scope.deleteNoteId = noteId;
	        }
        };
	}]);