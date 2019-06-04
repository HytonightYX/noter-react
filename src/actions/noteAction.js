import { findAll } from '../api/note'
import {LIST_NOTES} from '../constants'

export const listNotesAction = async dispatch => {
	const res = await findAll()
	dispatch({
		type: LIST_NOTES,
		payload: res.data
	})
}