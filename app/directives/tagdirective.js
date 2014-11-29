ForeverNote.directive('tagInput', function () {
	return {
		restrict: 'A',
		controller: 'TagsController',
		link: function($scope, element, attrs) {
			$scope.inputWidth = 20;

			// Watch for changes in text field
			$scope.$watch(attrs.ngModel, function(value) {
				if (value != undefined) {
					var tempEl = $('<span>' + value + '</span>').appendTo('body');
					$scope.inputWidth = tempEl.width() + 5;
					tempEl.remove();
				}
			});

			element.bind('keydown', function(e) {
				if (e.which == 9) {
					e.preventDefault();
				}

				if (e.which == 8) {
					$scope.$apply(attrs.deleteTag);
				}
			});

			element.bind('keyup', function(e) {
				var key = e.which;
				// Tab or Enter pressed 
				if (key == 9 || key == 13) {
					e.preventDefault();
					if ($scope.tagText && $scope.tagText !== '') {
						$scope.$apply(attrs.newTag);
					}
					return false;
				}
			});
		}
	}
});