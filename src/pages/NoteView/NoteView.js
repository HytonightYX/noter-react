import React, {Component} from 'react'
import {findById} from '../../api/note'
const ReactMarkdown = require('react-markdown')

class NoteView extends Component {

	state = {
		markdown: '',
		title: ''
	}

	componentWillMount() {
		findById(this.props.match.params.id)
			.then((note) => {
				console.log(note)
				this.setState({
					markdown: note.data.text,
					title: note.data.title
				})
			})
	}

	render() {
		return (
			<div>
				<ReactMarkdown source={this.state.markdown} />
			</div>
		)
	}
}

export default NoteView
