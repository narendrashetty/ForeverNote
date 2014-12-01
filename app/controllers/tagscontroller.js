// A controller to add or delete a tag
ForeverNote.controller('TagsController', [
	'$scope',
	function ($scope) {
		// method to handle resize of tagInput
		var resize = function () {
			var maxWidth = $('.tag-input-ctn').width() - 10,
				width = maxWidth - $('.tagsAddedContainer').width();

			$('.inputTag').css('width', width);
		};

		resize();

		// method to add new tag
		$scope.addTag = function() {
			if ($scope.tagText && $scope.tagText.length == 0) {
				return;
			}

			$scope.note.tags.push({name: $scope.tagText});
			$scope.tagText = '';
		}

		// method to delete tag
		$scope.deleteTag = function(key) {
			if ($scope.note.tags.length > 0 &&
				(!$scope.tagText || $scope.tagText.length === 0) &&
				key === undefined) {
				$scope.note.tags.pop();
			} else if (key != undefined) {
				$scope.note.tags.splice(key, 1);
			}
		}
	}]);