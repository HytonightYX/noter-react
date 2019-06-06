import {Avatar, Button, Col, Dropdown, Icon, Menu, Row} from 'antd'
import {Link} from 'react-router-dom'
import React from 'react'

const menu = (
	<Menu>
		<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.cnblogs.com/hai-cheng/">个人中心</a>
		</Menu.Item>
		<Menu.Item>
			退出登录
		</Menu.Item>
	</Menu>
);

// const Header = (props) => (
// 	<Header style={{color:'#fff',textAlign:'center'}}>
// 		<Row>
// 			<Col span={8}>
// 				<Menu
// 					theme="dark"
// 					mode="horizontal"
// 					defaultSelectedKeys={['m1']}
// 					style={{ lineHeight: '64px' }}
// 				>
// 					<Menu.Item key="m1">笔记仓库</Menu.Item>
// 					<Menu.Item key="m2">nav 2</Menu.Item>
// 					<Menu.Item key="m3">nav 3</Menu.Item>
// 				</Menu>
// 			</Col>
// 			<Col span={10}>
//
// 			</Col>
// 			<Col span={4}>
// 				{/*{this.props.login ?*/}
// 					<>
// 						<Avatar style={{backgroundColor: '#87d068',marginRight:20}} icon="user" />
// 						<Dropdown overlay={menu}>
// 											<span className="ant-dropdown-link" ref="#" style={{color:'#fff',cursor:'pointer'}}>
// 												Hi-Sen
// 												<Icon type="down" />
// 											</span>
// 						</Dropdown>
// 					</>
// 				{/*	:*/}
// 				{/*	<Button type={"primary"}>*/}
// 				{/*		<Link to="/login">登录</Link>*/}
// 				{/*	</Button>*/}
// 				{/*}*/}
//
// 			</Col>
// 		</Row>
// 	</Header>
// )

const Header = (props) => (
	<h1>HEADER</h1>
)

export default Header