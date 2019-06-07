import React, {Component} from 'react'
import {connect} from 'react-redux'
import {listNotesAction} from '../../actions/noteAction'
import NoteCard from '../NoteCard/NoteCard'
import './NoteRepo.css'
import AddNoteModal from '../AddNoteModal/AddNoteModal'

class NoteRepo extends Component {
	constructor(props) {
		super(props)
		console.log(props)
	}

	componentWillMount() {
		this.props.dispatch(listNotesAction)
	}

	render() {
		return (
			<div className='warp'>
				<AddNoteModal/>
				{this.props.noteReducer.usersNoteList.map(item => {
					return <NoteCard item={item} key={item._id}/>
				})}
			</div>
		)
	}
}

// mapStateToProps这个函数允许我们将 store 中的数据作为 props 绑定到组件上。
function mapStateToProps(state) {
	return {
		noteReducer: state.noteReducer,
		userReducer: state.userReducer
	}
}

export default connect(
	mapStateToProps,
)(NoteRepo)
