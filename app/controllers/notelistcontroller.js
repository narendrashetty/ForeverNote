ForeverNote.controller('NoteListController', [
    '$scope',
    '$location',
    'NoteService',
    function($scope, $location, NoteService) {
        $scope.notes = NoteService.getAllNotes();
        $scope.displayNote = function (noteId) {
            $scope.selectedNoteId = noteId;
            $location.path('/note/' + noteId);
        };


        // $scope.filtered = $scope.notes;

        // $scope.prevPage = function() {
        //     if ($scope.currentPage > 0) {
        //         $scope.currentPage--;
        //     }
        // };

        // $scope.prevPageDisabled = function() {
        //     return $scope.currentPage === 0 ? "disabled" : "";
        // };

        // $scope.pageCount = function() {
        //     return Math.ceil($scope.filtered.length / $scope.notesPerPage) - 1;
        // };

        // $scope.nextPage = function() {
        //     if ($scope.currentPage < $scope.pageCount()) {
        //         $scope.currentPage++;
        //     }
        // };

        // $scope.nextPageDisabled = function() {
        //     return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
        // };

        // $scope.setPage = function(n) {
        //     $scope.currentPage = n;
        // };

        // $scope.$watch('query.title', function(val) {
        //     $scope.currentPage = 0;
        // });        
    }
]);
