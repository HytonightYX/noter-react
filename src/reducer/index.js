import {combineReducers} from 'redux'

import {noteReducer} from './noteReducer'
import {userReducer} from './userReducer'
// import {userReducer} from './userReducer'
// 通过 combine把多个reducer进行合并
export const rootReducer = combineReducers({
	noteReducer,
	userReducer
})