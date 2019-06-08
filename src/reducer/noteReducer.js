import {
	LIST_NOTES,
	GET_NOTE_BY_ID,
	LIST_NOTES_BY_ID
} from '../constants'

// The initial state
const initialState = {
	noteList: [],
	usersNoteList: [],
	currNote: {}
};

export const noteReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIST_NOTES:
			return {
				...state, noteList: action.payload
			}
		case GET_NOTE_BY_ID:
			return {
				...state, currNote: action.payload
			}
		case LIST_NOTES_BY_ID:
			return {
				...state, usersNoteList: action.payload
			}
		default:
			return state
	}
}
