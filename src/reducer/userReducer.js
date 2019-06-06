import {

} from '../constants'

// The initial state
const initialState = {
	user: {
		login: 0,
	}
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GO_LOGIN':
			return true
		case 'OUT_LOGIN':
			return false
		default:
			return false
	}
}