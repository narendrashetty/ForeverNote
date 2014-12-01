var ForeverNote = angular.module('ForeverNote', ['ngRoute']);

ForeverNote.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise('/note')

		.when('/note/:noteId?', {
			templateUrl: 'app/views/noteviewer.html',
			controller: 'NoteViewerController'
		})
		.when('/add', {
			templateUrl: 'app/views/noteaddedit.html',
			controller: 'NoteAddController'
		})
		.when('/edit/:noteId', {
			templateUrl: 'app/views/noteaddedit.html',
			controller: 'NoteEditController'
		})
		.when('/delete/:noteId', {
			templateUrl: 'app/views/notelist.html',
			controller: 'NoteDeleteController'
		});
}]);