ForeverNote.controller('TagsController', [
	'$scope',
	function ($scope) {
		$scope.inputTags = [];

		$scope.addTag = function() {
			if ($scope.tagText && $scope.tagText.length == 0) {
				return;
			}

			$scope.inputTags.push({name: $scope.tagText});
			$scope.tagText = '';
		}

		$scope.deleteTag = function(key) {
			if ($scope.inputTags.length > 0 &&
				$scope.tagText.length == 0 &&
				key === undefined) {
				$scope.inputTags.pop();
			} else if (key != undefined) {
				$scope.inputTags.splice(key, 1);
			}
		}
	}]);