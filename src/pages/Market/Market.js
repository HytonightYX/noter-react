import React, {Component} from 'react'
import {listNotesAction} from '../../actions/noteAction'
import AddNoteModal from '../../components/AddNoteModal/AddNoteModal'
import NoteCard from '../../components/NoteCard/NoteCard'
import {connect} from 'react-redux'

class Market extends Component {
	constructor(props) {
		super(props)
		console.log(props)
	}

	componentWillMount() {
		this.props.dispatch(listNotesAction)
		console.log(this.props)
		// this.props.dispatch(getNoteByIdAction('5ce65bf6443303d08a534f30'))
	}

	render() {
		return (
			<div className='warp'>
				{this.props.noteReducer.noteList.map(item => {
					return <NoteCard item={item} key={item._id} type={'market'}/>
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
)(Market)
