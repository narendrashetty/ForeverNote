ForeverNote.controller('NoteListController', [
    '$scope',
    'NoteService',
    function($scope, NoteService) {
        $scope.notesPerPage = 9;
        $scope.currentPage = 0;
        $scope.notes = NoteService.getAllNotes();
        $scope.filtered = $scope.notes;

        $scope.prevPage = function() {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };

        $scope.prevPageDisabled = function() {
            return $scope.currentPage === 0 ? "disabled" : "";
        };

        $scope.pageCount = function() {
            return Math.ceil($scope.filtered.length / $scope.notesPerPage) - 1;
        };

        $scope.nextPage = function() {
            if ($scope.currentPage < $scope.pageCount()) {
                $scope.currentPage++;
            }
        };

        $scope.nextPageDisabled = function() {
            return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
        };

        $scope.setPage = function(n) {
            $scope.currentPage = n;
        };

        $scope.$watch('query.title', function(val) {
            $scope.currentPage = 0;
        });

        $scope.modalShown = false;
        $scope.toggleModal = function(noteId) {
        	$scope.deleteNoteId = noteId;
            $scope.modalShown = !$scope.modalShown;
        };
    }
]);
