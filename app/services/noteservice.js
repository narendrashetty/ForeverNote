angular.module('ForeeverNote', [])
	.service('NoteService', function () {
		// Private variable to store all notes
		var data = [{
			id: 1,
			title: 'note1',
			description: 'desc1',
			tags: ['tag1', 'tag2']
		},
		{
			id: 2,
			title: 'note1',
			description: 'desc1',
			tags: ['tag1', 'tag2']
		},
		{
			id: 3,
			title: 'note1',
			description: 'desc1',
			tags: ['tag1', 'tag2']
		}]
		return {
			// method to add a new note
			addNote: function (note) {

			},
			// method to delete a note
			deleteNote: function (id) {

			},
			// method to edit a particular note
			editNote: function (id, note) {

			},
			// method to get a particular note
			getNote: function (id) {

			},
			// method to get all note
			getAllNote: function () {

			}
		}
	});