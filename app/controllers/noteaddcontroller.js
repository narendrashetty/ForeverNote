ForeverNote.controller('NoteAddController', [
	'$scope',
	'$location',
	'NoteService',
	function ($scope, $location, NoteService) {
		$scope.note = {};
		$scope.note.tags = [];
		$('.noteViewer').removeClass('moveRight');
		$('#noteBrowser').removeClass('moveRight');
		$('.hamburgerContainer').removeClass('moveRight');
		$scope.save = function () {
			var noteId = NoteService.addNote(this.note);
			$location.path('/note/' + noteId);
		};
		$scope.cancel = function () {
			$location.path('/');
		};
		$scope.submitForm = function(isValid) {
			// check to make sure the form is completely valid
			if (isValid) { 
				$scope.save();
			}

		};
	}]);