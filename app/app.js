var ForeverNote = angular.module('ForeverNote', ['ngRoute']);
// Route Configuration begins
ForeverNote.config(['$routeProvider', function ($routeProvider) {
	// Default route
	$routeProvider.otherwise('/note')
		// route for a note view
		.when('/note/:noteId?', {
			templateUrl: 'app/views/noteviewer.html',
			controller: 'NoteViewerController'
		})
		// route to add a new note
		.when('/add', {
			templateUrl: 'app/views/noteaddedit.html',
			controller: 'NoteAddController'
		})
		// route to edit a particular note
		.when('/edit/:noteId', {
			templateUrl: 'app/views/noteaddedit.html',
			controller: 'NoteEditController'
		})
		// route to delete a particular note
		.when('/delete/:noteId', {
			templateUrl: 'app/views/notelist.html',
			controller: 'NoteDeleteController'
		});
}]);