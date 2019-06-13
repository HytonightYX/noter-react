import React, {Component} from 'react'
import {findById} from '../../api/note'
import './NoteView.css'
const ReactMarkdown = require('react-markdown/with-html')

class NoteView extends Component {

	state = {
		markdown: '',
		title: ''
	}

	componentWillMount() {
		findById(this.props.match.params.id)
			.then((note) => {
				this.setState({
					markdown: note.data.text,
					title: note.data.title
				})
			})
	}

	render() {
		return (
			<div
				className={'markdown-warp'}
			>
				<ReactMarkdown
					source={this.state.markdown}
					escapeHtml={false}
				/>
			</div>
		)
	}
}

export default NoteView
