ForeverNote.controller('NoteViewerController', [
	'$scope',
	'$location',
	'$routeParams',
	'NoteService',
	function ($scope, $location, $routeParams, NoteService) {
		$scope.selectedNote = NoteService.getNote($routeParams.noteId);

		$scope.modalShown = false;
        $scope.toggleModal = function(noteId) {
        	$scope.modalShown = !$scope.modalShown;
        	if(noteId) {
	        	$scope.deleteNoteId = noteId;
	        }
        };
	}]);