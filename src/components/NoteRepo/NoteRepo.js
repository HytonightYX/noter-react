import React, {Component} from 'react'
import {connect} from 'react-redux'
import {listNotesAction} from '../../actions/noteAction'
import NoteCard from '../NoteCard/NoteCard'

import './NoteRepo.css'

class NoteRepo extends Component {
	constructor(props) {
		super(props)
		// console.log(props)
	}

	componentWillMount() {
		this.props.dispatch(listNotesAction)
	}

	render() {
		return (
			<div className='warp'>
				{this.props.noteReducer.noteList.map(item => {
					return <NoteCard title={item.title} description={item.text} key={item._id}/>
				})}
			</div>
		)
	}
}

// mapStateToProps这个函数允许我们将 store 中的数据作为 props 绑定到组件上。
function mapStateToProps(state) {
	return {
		noteReducer: state.noteReducer
	}
}

export default connect(
	mapStateToProps,
)(NoteRepo)
