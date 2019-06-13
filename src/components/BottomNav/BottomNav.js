import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Avatar, Button, Dropdown,Layout , Icon, Menu, message} from 'antd'
import {Link} from 'react-router-dom'
import {logoutAction} from '../../actions/userAction'
import {cleanNotesdAction, listNotesAction} from '../../actions/noteAction'
import Cookie from 'universal-cookie'
const {Header} = Layout

class BottomNav extends Component {
	handleLogOut = () => {
		const cookie = new Cookie()
		cookie.set('userid', null, {
			path: '/'
		})
		this.props.dispatch(logoutAction)
		this.props.dispatch(cleanNotesdAction)
		message.success('登出成功', 1);
	}

	render() {
		return (
			<Header
				style={{
				}}>
				<div style={{textAlign: 'center'}}>
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={['m2']}
						style={{
							lineHeight: '64px'
						}}
					>
						<Menu.Item key="m1" style={{width: '33.4%'}}><Link to="/market" onClick={() => {this.props.dispatch(listNotesAction)}}>笔记市场</Link></Menu.Item>
						<Menu.Item key="m2" style={{width: '33.2%'}}><Link to="/">笔记仓库</Link></Menu.Item>
						<Menu.Item key="m3" style={{width: '33.4%'}}><Link to="/profile" >个人</Link></Menu.Item>
					</Menu>
				</div>
			</Header>
		)
	}
}

function mapStateToProps(state) {
	return {
		currUser: state.userReducer.currUser
	}
}

export default connect(
	mapStateToProps,
)(BottomNav)
