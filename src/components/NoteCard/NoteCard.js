import { Card, Icon, Avatar } from 'antd';
import React from "react"
import { Link } from 'react-router-dom'
const { Meta } = Card;

const gridStyle = {
	width: '25%',
	textAlign: 'center',
};

export default class NoteCard extends React.Component {
	state = {
		loading: false,
	};

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
				actions={[<Link to={'/a'}><Icon type="setting" /></Link>, <Link to={`/note/${this.props.id}/edit`}><Icon type="edit" /></Link>, <Icon type="ellipsis" />]}
				hoverable={true}
			>
				<Meta
					avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
					title={this.props.item.title}
					description={this.props.item.description}
					onClick={this.handleClick}
				/>
			</Card>
		);
	}
}
