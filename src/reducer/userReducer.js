import {
	LOG_IN,
	LOG_OUT
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
		default:
			return state
	}
}