const SAVE_NOTE = 'SAVE_NOTE'
const WRITE_NEW_NOTE = 'WRITE_NEW_NOTE'
const DELETE_NOTE = 'DELETE_NOTE'
const TOGGLE_COMPLETED_NOTE = 'TOGGLE_COMPLETED_NOTE'
const DELETE_ALL_COMPLETED_NOTES = 'DELETE_ALL_COMPLETED_NOTES'

let initialStore = {
	notes: [],
	newNoteText: '',
	activeNotesCount: ''
}

const hashNote = (note) => {
	function randomNumber() {
		return Math.floor(Math.random() * 1001)
	}
	return `${note.length}-${randomNumber()}${randomNumber()}${randomNumber()}`
}

const usualReturn = (state) => {
	const allNotes = JSON.parse(localStorage.getItem("toDoList"))
	let activeNotesCount = 0
	if (allNotes != null) {
		allNotes.forEach(n => {
			if (!n.completed) activeNotesCount += 1
		});
	}

	return { ...state, notes: allNotes, newNoteText: '', activeNotesCount: activeNotesCount }
}



const memoryReducer = (state = initialStore, action) => {
	switch (action.type) {
		case SAVE_NOTE:
			if (state.newNoteText.trim() == '') {
				return usualReturn(state)
			}
			const newNote = { text: state.newNoteText, id: hashNote(state.newNoteText), completed: false }
			state.notes == null ? localStorage.setItem('toDoList', JSON.stringify([newNote])) :
			localStorage.setItem('toDoList', JSON.stringify([...state.notes, newNote]))
			return usualReturn(state)

		case WRITE_NEW_NOTE:
			return { ...state, newNoteText: action.note }
		case DELETE_NOTE:
			const changableState = [...state.notes]
			const index = changableState.findIndex(n => n.id == action.noteId)
			changableState.splice(index, 1)
			localStorage.setItem('toDoList', JSON.stringify(changableState))
			return usualReturn()

		case DELETE_ALL_COMPLETED_NOTES:
			const onlyActiveNotes = [...state.notes]
			const activeNotes = onlyActiveNotes.filter(n => n.completed == false)

			localStorage.setItem('toDoList', JSON.stringify(activeNotes))
			return usualReturn()
		case TOGGLE_COMPLETED_NOTE:
			const changedCompleted = [...state.notes].map((n, i) => {
				if (n.id == action.noteId) {
					n.completed = !n.completed
				}
				return n
			})
			localStorage.setItem('toDoList', JSON.stringify(changedCompleted))
			return usualReturn(state)

		default:
			return usualReturn(state)

	}
}

export const writeNewNote = (note) => ({ type: WRITE_NEW_NOTE, note })
export const saveNote = () => ({ type: SAVE_NOTE })
export const deleteNote = (noteId) => ({ type: DELETE_NOTE, noteId })
export const deleteAllCompletedNotes = () => ({ type: DELETE_ALL_COMPLETED_NOTES })
export const toggleCompletedNote = (noteId) => ({ type: TOGGLE_COMPLETED_NOTE, noteId })

export default memoryReducer