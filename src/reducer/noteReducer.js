import {
	LIST_NOTES,
	GET_NOTE_BY_ID
} from '../constants'

// The initial state
const initialState = {
	noteList: [],
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
		default:
			return state
	}
}