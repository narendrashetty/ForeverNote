ForeverNote.controller('NoteListController', [
    '$scope',
    '$location',
    '$routeParams',
    'NoteService',
    function($scope, $location, $routeParams, NoteService) {
        NoteService.getAllNotes();
        $scope.displayNote = function (noteId) {
            $scope.selectedNoteId = noteId;
            $location.path('/note/' + noteId);
        };

        $scope.$watch(function () { return NoteService.allNotes }, function (newVal, oldVal) {
            if (typeof newVal !== 'undefined') {
                $scope.notes = NoteService.allNotes;
            }
        });      
    }
]);
