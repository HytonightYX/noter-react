import {
	LOG_IN,
	LOG_OUT,
	UPDATE_USER
} from '../constants'

// The initial state
const initialState = {
	currUser: null
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state, currUser: action.payload
			}
		case LOG_OUT:
			return {
				...state, currUser: null
			}
		case UPDATE_USER:
			return {
				...state, currUser: action.payload
			}
		default:
			return state
	}
}
