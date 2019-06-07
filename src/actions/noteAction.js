import { findAll, findById } from '../api/note'
import {LIST_NOTES, GET_NOTE_BY_ID, ADD_NOTE} from '../constants'

export const listNotesAction = async (dispatch) => {
	const res = await findAll()
	dispatch({
		type: LIST_NOTES,
		payload: res.data.reverse()
	})
}

export const getNoteByIdAction = (id) => async (dispatch) => {
	const res = await findById(id)
	console.log(res)
	dispatch({
		type: GET_NOTE_BY_ID,
		payload: res.data
	})
}

export const addNote = (newNote) => async (dispatch) => {
	dispatch({
		type: ADD_NOTE,
		payload: newNote
	})
}
