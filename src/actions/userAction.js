import { getUserProfileById } from '../api/user'
import {LOG_IN, LOG_OUT} from '../constants'
import Cookie from 'universal-cookie'

export const loginAction = (id) => async (dispatch) => {
	console.log('loginAction')

	const res = await getUserProfileById(id)
	console.log(res.data)
	dispatch({
		type: LOG_IN,
		payload: res.data
	})
}

export const logoutAction = async (dispatch) => {
	console.log('logOutAction')

	dispatch({
		type: LOG_OUT,
	})
}