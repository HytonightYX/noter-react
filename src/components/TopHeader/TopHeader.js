import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Avatar, Button, Dropdown, Icon, Layout, Menu, message} from 'antd'
import {Link} from 'react-router-dom'
import {logoutAction} from '../../actions/userAction'
import {cleanNotesdAction, listNotesAction} from '../../actions/noteAction'
import Cookie from 'universal-cookie'
import Desktop from '../Responsive/Desktop'
import {GITHUB_CLIENT_ID} from '../../constants'
import Mobile from '../Responsive/Mobile'

const {Header} = Layout

class TopHeader extends Component {
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
				<Header>
					<div style={{
						float: 'right',
					}}>
						{this.props.currUser ?
							<div>

								<Dropdown
									overlay={
										<Menu>
											<Menu.Item>
												<Link to={'/profile'}>个人中心</Link>
											</Menu.Item>
											<Menu.Item onClick={this.handleLogOut}>
												退出登录
											</Menu.Item>
										</Menu>
									}
								>
								<span
									className="ant-dropdown-link"
									style={{color:'#fff',cursor:'pointer'}}
								>
									<Avatar src={this.props.currUser.avatar_url} style={{backgroundColor: '#87d068',marginRight:20}} icon="user" />
									<Desktop>
										{this.props.currUser.username} <Icon type="down" />
									</Desktop>
								</span>
								</Dropdown>
							</div>
							:
							<div>
								<Button type={"primary"} >
									<a href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`} target={''}><Icon type="github" /> 用Gihub登录</a>
								</Button>
							</div>}
					</div>

					<Mobile>
						<div className="logo" style={{
							width: 100,
							height: 31,
							margin: '0 auto'
						}}><h1 style={{
							textAlign: 'center',
							color: '#fff'
						}}>Noter</h1></div>
					</Mobile>

					<Desktop>
						<div className="logo" style={{
							width: 80,
							height: 31,
							float: 'left',
						}}><h1 style={{
							textAlign: 'center',
							color: '#fff'
						}}>Noter</h1></div>
					</Desktop>
					<Desktop>
						<Menu
							theme="dark"
							mode="horizontal"
							defaultSelectedKeys={['m2']}
							style={{ lineHeight: '64px' }}
						>
							<Menu.Item key="m1"><Link to="/market" onClick={() => {this.props.dispatch(listNotesAction)}}>笔记市场</Link></Menu.Item>
							<Menu.Item key="m2"><Link to="/">笔记仓库</Link></Menu.Item>
							<Menu.Item key="m3"><Link to="/profile" >个人</Link></Menu.Item>
						</Menu>
					</Desktop>
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
