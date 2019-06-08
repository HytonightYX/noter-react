import React, {Component} from 'react'
import {findById} from '../../api/note'
const ReactMarkdown = require('react-markdown/with-html')

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
			<div style={{
				width: 800,
				margin: '0 auto'
			}}>
				<ReactMarkdown
					source={this.state.markdown}
					escapeHtml={false}
				/>
			</div>
		)
	}
}

export default NoteView
