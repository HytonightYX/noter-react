import { getUserProfileById, updateUserProfile } from '../api/user'
import {LOG_IN, LOG_OUT, UPDATE_USER} from '../constants'

export const loginAction = (id) => async (dispatch) => {
	console.log('loginAction')
	const res = await getUserProfileById(id)
	console.log(res.data)
	dispatch({
		type: LOG_IN,
		payload: res.data
	})
}

export const updateUserAction = (user) => async (dispatch) => {
	console.log('updateUserAction')
	const res = await updateUserProfile(user)
	console.log(res.data)
	dispatch({
		type: UPDATE_USER,
		payload: res.data
	})
}

export const logoutAction = async (dispatch) => {
	console.log('logOutAction')
	dispatch({
		type: LOG_OUT,
	})
}
