import React, {Component} from 'react'
import {connect} from 'react-redux'
import { listNotesAction ,listNoteByIdAction } from '../../actions/noteAction'
import NoteCard from '../NoteCard/NoteCard'
import './NoteRepo.css'
import AddNoteModal from '../AddNoteModal/AddNoteModal'

const lgImg = require('../../assets/login.jpg')
class NoteRepo extends Component {
	reRender = () => {
		this.props.dispatch(listNoteByIdAction(this.props.userReducer.currUser._id))
		this.props.dispatch(listNotesAction)
	}

	render() {
		return (
			<>
				{this.props.userReducer.currUser ?
					<div className='warp'>
						<AddNoteModal reRender={this.reRender} />
						{this.props.noteReducer.usersNoteList.map(item => {
							return <NoteCard item={item} key={item._id}/>
						})}
					</div>
					:
					<img src={lgImg} alt=""/>}
			</>
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
