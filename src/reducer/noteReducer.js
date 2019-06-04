import {
	LIST_NOTES
} from '../constants'

// The initial state
const initialState = {
	noteList: []
};

export const noteReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIST_NOTES:
			return {
				...state, noteList: action.payload
			}
		default:
			return state
	}
}