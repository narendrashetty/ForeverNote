// A directive for tags
ForeverNote.directive('tagInput', function () {
	return {
		restrict: 'A',
		controller: 'TagsController',
		link: function($scope, element, attrs) {
			var resize = function () {
				var maxWidth = $('.tag-input-ctn').width() - 10,
					width = maxWidth - $('.tagsAddedContainer').width();

				$('.inputTag').css('width', width);
			};

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
						resize();
					}
					return false;
				}
			});
		}
	}
});