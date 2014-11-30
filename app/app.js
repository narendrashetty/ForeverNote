var ForeverNote = angular.module('ForeverNote', ['ngRoute']);

ForeverNote.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise('/note')

		.when('/note/:noteId?', {
			templateUrl: 'app/views/noteviewer.html',
			controller: 'NoteViewerController'
		})
		.when('/add', {
			templateUrl: 'app/views/noteAddEdit.html',
			controller: 'NoteAddController'
		})
		.when('/edit/:noteId', {
			templateUrl: 'app/views/noteAddEdit.html',
			controller: 'NoteEditController'
		})
		.when('/delete/:noteId', {
			templateUrl: 'app/views/noteList.html',
			controller: 'NoteDeleteController'
		});
}]);