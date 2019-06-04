import { Card, Icon, Avatar } from 'antd';
import React from "react"
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

	render() {
		const { loading } = this.state;

		return (
			<Card
				style={{ width: 300,
				borderRadius: '10px',
				margin: '5px'}}
				// cover={
				// 	<img
				// 		alt="example"
				// 		src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
				// 	/>
				// }
				actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
				hoverable={true}
			>
				<Meta
					avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
					title={this.props.title}
					description={this.props.description}
				/>
			</Card>
		);
	}
}