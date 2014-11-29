var ForeverNote = angular.module('ForeverNote', ['ngRoute']);

ForeverNote.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise('/')
		.when('/', {
			templateUrl: 'app/views/noteList.html',
			controller: 'NoteListController'
		});
}]);