import { findAll, findById, findByOwnerId } from '../api/note'
import {LIST_NOTES, GET_NOTE_BY_ID, LIST_NOTES_BY_ID, CLEAN_USER_NOTES} from '../constants'

export const listNotesAction = async (dispatch) => {
	const res = await findAll()
	dispatch({
		type: LIST_NOTES,//这个reducer
		payload: res.data.reverse()
	})
}

export const listNoteByIdAction = (id) => async (dispatch) => {
	const res = await findByOwnerId(id)
	dispatch({
		type: LIST_NOTES_BY_ID,
		payload: res.data.reverse()
	})
}

export const cleanNotesdAction = async (dispatch) => {
	dispatch({
		type: CLEAN_USER_NOTES,
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
