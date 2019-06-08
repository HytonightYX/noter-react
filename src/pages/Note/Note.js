import { findById, updateText } from '../../api/note'
import React from 'react';
import './Note.css'
import Editor from 'for-editor'
import {Button, message} from 'antd'
import history from '../../history'

class Note extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			markdown: '',
			title: ''
		}
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

	commitMarkdown = () => {
		const param = {
			id: this.props.match.params.id,
			text: this.state.markdown,
			title: this.state.title
		}
		console.log(param)
		updateText(param)
			.then(() => {
				history.goBack();
				message.success('修改成功', 1)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	handleChange(markdown) {
		this.setState({
			markdown: markdown
		})
	}

	changeTitle = (e) => {
		this.setState({
			title: e.target.value
		}, () => {
			console.log(this.state.title)
		})
	}

	render() {
		const { markdown } = this.state
		return (
			<div>
				<input
					type="text"
					value={this.state.title}
					style={{
						border: '0 none',
						outline: 'none',
						fontSize: 25,
						marginBottom: 10,
						color: '#00000'
					}}
					onChange={this.changeTitle}
				/>
				<div className={'editor'} >
					<Editor value={markdown} onChange={this.handleChange.bind(this)} />
				</div>
				<div>
					<Button onClick={this.commitMarkdown} type={'primary'} style={{marginTop: 10}}>提交修改</Button>
				</div>
			</div>
		);
	}
}

export default Note
