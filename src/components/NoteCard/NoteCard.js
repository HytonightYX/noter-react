import { Card, Icon, Avatar } from 'antd';
import React from "react"

import { Link } from 'react-router-dom'
import {getUserProfileById} from '../../api/user'
const { Meta } = Card;

export default class NoteCard extends React.Component {
	state = {
		loading: false,
		owner: {}
	};

	componentWillMount() {
		getUserProfileById(this.props.item.owner)
			.then((res) => {
				this.setState({
					owner: res.data
				})
			})
	}

	actionList = ( this.props.type === 'market' ?
				[
					<Link to={`/note/${this.props.item._id}/view`}><Icon type="eye"/></Link>,
					<Icon type="like"/>
				]
			:
				[
					<Link to={'/a'}><Icon type="setting" /></Link>,
					<Link to={`/note/${this.props.item._id}/edit`}><Icon type="edit" /></Link>,
					<Icon type="ellipsis" />
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
				className={'card'}
				style={{
					minWidth: 300,
					borderRadius: '10px',
					margin: '20px 20px'
				}}
				actions={this.actionList}
				hoverable={true}
			>
				<Meta
					avatar={<Avatar src={this.state.owner.avatar_url} />}
					title={this.props.item.title}
					description={this.props.item.description}
					onClick={this.handleClick}
				/>
			</Card>
		);
	}
}
