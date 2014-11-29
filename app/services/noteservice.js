ForeverNote.service('NoteService', function () {
	// Private variable to store all notes
	var data = [{
		id: 1,
		title: 'narendra',
		description: 'aaa',
		tags: [{name: "zzz"}, {name: "bbb"}, {name: "ccc"}]
	},
	{
		id: 2,
		title: 'rahul',
		description: 'bbb',
		tags: [{name: "ddd"},{name: "iii"},{name: "fff"}]
	},
	{
		id: 3,
		title: 'jijo',
		description: 'ccc',
		tags: [{name: "ggg"},{name: "hhh"},{name: "iii"}]
	}];
	return {
		// method to add a new note
		addNote: function (note) {
			var id = data.length;
			note.id = id+1;
			data.push(note);
		},
		// method to delete a note
		deleteNote: function (id) {
			var note = this.getNote(id),
				index = data.indexOf(note);

			data.splice(index, 1);

		},
		// method to edit a particular note
		editNote: function (id, note) {
			for (var i=0; i < data.length; i++) {
				if (data[i].id === +id) {
					data[i] = note;
					break;
				}
			}
			data[i].id = id;
		},
		// method to get a particular note
		getNote: function (id) {
			for (var i=0; i < data.length; i++) {
				if (data[i].id === +id) {
					return data[i];
				}
			}
			return false;
		},
		// method to get all note
		getAllNotes: function () {
			return data;
		}
	}
});