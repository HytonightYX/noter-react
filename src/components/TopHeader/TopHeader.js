import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Avatar, Button, Dropdown, Icon, Layout, Menu, message} from 'antd'
import {Link} from 'react-router-dom'
import {logoutAction} from '../../actions/userAction'
import Cookie from 'universal-cookie'
const {Header} = Layout

class TopHeader extends Component {

	handleLogOut = () => {
		const cookie = new Cookie()
		cookie.set('userid', null)
		this.props.dispatch(logoutAction)
		message.success('登出成功');
	}

	render() {
		return (
			<Header
				style={{
					color:'#fff',
					textAlign:'center',
					display: 'flex',
					justifyContent: 'space-between'
				}}>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['m2']}
					style={{ lineHeight: '64px' }}
				>
					<Menu.Item key="m1"><Link to="/market" >笔记市场</Link></Menu.Item>
					<Menu.Item key="m2"><Link to="/" >笔记仓库</Link></Menu.Item>
					<Menu.Item key="m3"><Link to="/profile" >个人</Link></Menu.Item>
				</Menu>

				<h1 style={{
					color: '#fff'
				}}>Noter笔记共享平台</h1>

				{this.props.currUser ?
					<div>
						<Avatar src={this.props.currUser.avatar_url} style={{backgroundColor: '#87d068',marginRight:20}} icon="user" />
						<Dropdown overlay={
							<Menu>
								<Menu.Item>
									<Link to={'/profile'}>个人中心</Link>
								</Menu.Item>
								<Menu.Item onClick={this.handleLogOut}>
									退出登录
								</Menu.Item>
							</Menu>
						}>
						<span className="ant-dropdown-link" style={{color:'#fff',cursor:'pointer'}}>
							{this.props.currUser.username} <Icon type="down" />
						</span>
						</Dropdown>
					</div>
				:
					<div>
						<Button type={"primary"} >
							<a href='https://github.com/login/oauth/authorize?client_id=3672b8255f18495d5093' target={''}><Icon type="github" /> 用Gihub登录</a>
						</Button>
					</div>}

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
)(TopHeader)
