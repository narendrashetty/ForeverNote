// A controller to add a new note
ForeverNote.controller('NoteAddController', [
	'$scope',
	'$location',
	'NoteService',
	function ($scope, $location, NoteService) {
		// note object and tag array is created
		$scope.note = {};
		$scope.note.tags = [];
		// reset the left nav and note viewer position
		$('.noteViewer').removeClass('moveRight');
		$('#noteBrowser').removeClass('moveRight');
		$('.hamburgerContainer').removeClass('moveRight');
		// method to save a particular note
		$scope.save = function () {
			var noteId = NoteService.addNote(this.note);
			$location.path('/note/' + noteId);
		};
		// method to cancel the operation
		$scope.cancel = function () {
			$location.path('/');
		};
		// form submit handler
		$scope.submitForm = function(isValid) {
			// check to make sure the form is completely valid
			if (isValid) { 
				$scope.save();
			}

		};
	}]);