import { findById, updateText } from '../../api/note'
import React from 'react';
import './Note.css'
import Editor from 'for-editor'

class Note extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			markdown: ''
		}
	}

	componentWillMount() {
		findById(this.props.match.params.id)
			.then((note) => {
				console.log(note.data)
				this.setState({
					markdown: note.data.text
				})
			})
	}

	commitMarkdown = () => {
		const param = {
			id: this.props.match.params.id,
			text: this.state.markdown
		}
		console.log(param)
		updateText(param)
			.catch((err) => {
				console.log(err)
			})
	}

	handleChange(markdown) {
		this.setState({
			markdown: markdown
		})
	}

	render() {
		const { markdown } = this.state
		return (
			<div>
				<header>HEADER</header>
				<input placeholder={'Noter编辑器'}/>
				<button onClick={this.commitMarkdown}>提交修改</button>
				<div className={'editor'}>
					<Editor value={markdown} onChange={this.handleChange.bind(this)} />
				</div>
				<footer>FOOTER</footer>
			</div>
		);
	}
}

export default Note


// <MarkdownEditor
// options={{
// 	autofocus: true,
// 		showCursorWhenSelecting: true,
// }}
// height={500}
// value={this.state.markdown}
// onChange={this.updateMarkdown}
// />