import React, {Component} from 'react'
import {connect} from 'react-redux'
import {listNotesAction, getNoteByIdAction} from '../../actions/noteAction'
import NoteCard from '../NoteCard/NoteCard'
import './NoteRepo.css'
import {Card} from 'antd'
import {Link} from 'react-router-dom'

class NoteRepo extends Component {
	constructor(props) {
		super(props)
		console.log(props)
	}

	componentWillMount() {
		this.props.dispatch(listNotesAction)
		this.props.dispatch(getNoteByIdAction('5ce65bf6443303d08a534f30'))
	}

	render() {
		return (
			<div className='warp'>
				<Link to={'/addNote'}>
					<button
						className={'pre-card'}
					>
						新增笔记
					</button>
				</Link>

				{this.props.noteReducer.noteList.map(item => {
					return <NoteCard item={item} key={item._id}/>
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
