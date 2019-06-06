import React, {Component} from 'react'
import {message} from 'antd'
import './Repo.css'
import {connect} from 'react-redux'
import NoteRepo from '../../components/NoteRepo/NoteRepo'

class Repo extends Component {
	render() {
		return (
			<NoteRepo/>
		)
	}
}

export default connect()(Repo)
