import React, {Component} from 'react'
import './Repo.css'
import {connect} from 'react-redux'
import NoteRepo from '../../components/NoteRepo/NoteRepo'

class Repo extends Component {
	render() {
		return (
			<div style={{
				padding: '0 auto'
			}}>
				<NoteRepo/>
			</div>
		)
	}
}

export default connect()(Repo)
