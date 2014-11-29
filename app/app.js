angular.module('ForeverNote', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.otherwise('/')
			.when('/', {
				templateUrl: 'app/views/noteList.html'
			});
	}]);