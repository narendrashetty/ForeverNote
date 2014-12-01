// A controller to list out all note
ForeverNote.controller('NoteListController', [
    '$scope',
    '$location',
    '$routeParams',
    'NoteService',
    function($scope, $location, $routeParams, NoteService) {
        // get latest notes from services
        NoteService.getAllNotes();
        // method to display a particular note on click
        $scope.displayNote = function (noteId) {
            $scope.selectedNoteId = noteId;
            $location.path('/note/' + noteId);
        };

        // observer to watch if service variable `allNotes` has changed
        $scope.$watch(function () { return NoteService.allNotes }, function (newVal, oldVal) {
            if (typeof newVal !== 'undefined') {
                $scope.notes = NoteService.allNotes;
            }
        });      
    }
]);
