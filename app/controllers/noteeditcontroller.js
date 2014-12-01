ForeverNote.controller('NoteEditController', [
	'$scope',
	'$location',
	'$routeParams',
	'NoteService',
	function ($scope, $location, $routeParams, NoteService) {
		var updateTagInputWidth = function () {
			setTimeout(function () {
				var width = 490 - $('.tagsAddedContainer').width();
				$('.inputTag').css('width', width);
			}, 10);
		}
		$scope.note = NoteService.getNote($routeParams.noteId);
		updateTagInputWidth();
		$scope.save = function () {
			NoteService.editNote(this.note.id, this.note);
			$location.path('/note/' + this.note.id);
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