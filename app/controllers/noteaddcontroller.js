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
	}]);