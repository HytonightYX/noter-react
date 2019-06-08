import {Card, Icon, Avatar, Skeleton, Tooltip, message} from 'antd'
import React from "react"

import { Link } from 'react-router-dom'
import {getUserProfileById} from '../../api/user'
import './NoteCard.css'
import {deleteById} from '../../api/note'
import {listNoteByIdAction, listNotesAction} from '../../actions/noteAction'
import {connect} from 'react-redux'

const { Meta } = Card;

class NoteCard extends React.Component {
	state = {
		loading: true,
		owner: {}
	};

	componentWillMount() {
		getUserProfileById(this.props.item.owner)
			.then((res) => {
				this.setState({
					owner: res.data,
					loading: false
				})
			})
	}

	handleDelete = () => {
		deleteById(this.props.item._id)
			.then(() => {
				this.props.dispatch(listNoteByIdAction(this.state.owner._id))
				this.props.dispatch(listNotesAction)
				message.warning('删除笔记成功', 1);
			})
	}

	actionList = ( this.props.type === 'market' ?
				[
					<Tooltip placement="top" title={
						<span>查看笔记</span>
					}>
						<Link to={`/note/${this.props.item._id}/view`}><Icon type="eye"/></Link>
					</Tooltip>,
					<Tooltip placement="top" title={
						<span>点赞</span>
					}>
						<Icon type="like"/>
					</Tooltip>

				]
			:
				[
					<Tooltip placement="top" title={
						<span>查看笔记</span>
					}>
						<Link to={`/note/${this.props.item._id}/view`}><Icon type="eye"/></Link>
					</Tooltip>,
					<Tooltip placement="top" title={
						<span>编辑笔记</span>
					}>
						<Link to={`/note/${this.props.item._id}/edit`}><Icon type="edit" /></Link>
					</Tooltip>,
					<Tooltip placement="top" title={
						<span>删除笔记</span>
					}>
						<Icon type="delete" onClick={this.handleDelete} />
					</Tooltip>
				]
	)

	onChange = checked => {
		this.setState({ loading: !checked });
	};

	render() {
		const { loading } = this.state;

		return (
			<Card
				className={'m-card'}
				style={{
					minWidth: 300,
					borderRadius: '10px',
					margin: '20px 20px'
				}}
				actions={this.actionList}
				hoverable={true}
			>
				<Skeleton loading={loading} avatar active>
				<Meta
					avatar={<Avatar src={this.state.owner.avatar_url} />}
					title={this.props.item.title}
					description={this.props.item.description}
					onClick={this.handleClick}
				/>
				</Skeleton>
			</Card>
		);
	}
}

export default connect()(NoteCard)
