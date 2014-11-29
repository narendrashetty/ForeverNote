ForeverNote.controller('TagsController', [
	'$scope',
	function ($scope) {

		$scope.addTag = function() {
			if ($scope.tagText && $scope.tagText.length == 0) {
				return;
			}

			$scope.note.tags.push({name: $scope.tagText});
			$scope.tagText = '';
		}

		$scope.deleteTag = function(key) {
			if ($scope.note.tags.length > 0 &&
				$scope.tagText.length == 0 &&
				key === undefined) {
				$scope.note.tags.pop();
			} else if (key != undefined) {
				$scope.note.tags.splice(key, 1);
			}
		}
	}]);