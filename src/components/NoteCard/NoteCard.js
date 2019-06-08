import {Card, Icon, Avatar, Skeleton} from 'antd'
import React from "react"

import { Link } from 'react-router-dom'
import {getUserProfileById} from '../../api/user'
import './NoteCard.css'
import {deleteById} from '../../api/note'
import {listNoteByIdAction} from '../../actions/noteAction'
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
			})
	}

	actionList = ( this.props.type === 'market' ?
				[
					<Link to={`/note/${this.props.item._id}/view`}><Icon type="eye"/></Link>,
					<Icon type="like"/>
				]
			:
				[
					<Link to={`/note/${this.props.item._id}/view`}><Icon type="eye"/></Link>,
					<Link to={`/note/${this.props.item._id}/edit`}><Icon type="edit" /></Link>,
					<Icon type="delete" onClick={this.handleDelete} />
				]
	)

	onChange = checked => {
		this.setState({ loading: !checked });
	};

	handleClick = () => {
		console.log('点击了某卡片')
	}

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
