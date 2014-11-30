ForeverNote.service('NoteService', function () {

	return {
		// method to add a new note
		addNote: function (note) {
			var id = 0,
				tempId = 0;
			for (var key in localStorage) {
				if(key.indexOf('ForeverNote_') == 0) {
					tempId = +key.match(/\d+$/)[0];
					id = (id < tempId) ? tempId : id;
				}
			}
			note.id = ++id;
			localStorage['ForeverNote_' +id] = JSON.stringify(note);
		},
		// method to delete a note
		deleteNote: function (id) {
			localStorage.removeItem('ForeverNote_'+id);
		},
		// method to edit a particular note
		editNote: function (id, note) {
			localStorage['ForeverNote_' +id] = JSON.stringify(note);
		},
		// method to get a particular note
		getNote: function (id) {
			if(localStorage['ForeverNote_'+id]) {
				return JSON.parse(localStorage['ForeverNote_'+id]);
			}
			return false;
		},
		// method to get all note
		getAllNotes: function () {
			var notes = [];
			for (var note in localStorage) {
				if(note.indexOf('ForeverNote_') == 0) {
					notes.push(JSON.parse(localStorage[note]));
				}
			}
			return notes;
		}
	}
});