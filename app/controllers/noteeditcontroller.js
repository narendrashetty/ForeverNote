// A controller to edit a new note
ForeverNote.controller('NoteEditController', [
	'$scope',
	'$location',
	'$routeParams',
	'NoteService',
	function ($scope, $location, $routeParams, NoteService) {
		// method to update the tag input box width
		var updateTagInputWidth = function () {
			setTimeout(function () {
				var width = 490 - $('.tagsAddedContainer').width();
				$('.inputTag').css('width', width);
			}, 10);
		}
		// editing note is obtainer
		$scope.note = NoteService.getNote($routeParams.noteId);

		updateTagInputWidth();
		// method to save a particular note
		$scope.save = function () {
			NoteService.editNote(this.note.id, this.note);
			$location.path('/note/' + this.note.id);
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