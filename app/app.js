var ForeverNote = angular.module('ForeverNote', ['ngRoute']);

ForeverNote.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise('/')
		.when('/', {
			templateUrl: 'app/views/noteList.html',
			controller: 'NoteListController'
		})
		.when('/add', {
			templateUrl: 'app/views/noteAddEdit.html',
			controller: 'NoteAddController'
		})
		.when('/edit/:noteId', {
			templateUrl: 'app/views/noteAddEdit.html',
			controller: 'NoteEditController'
		});
}]);