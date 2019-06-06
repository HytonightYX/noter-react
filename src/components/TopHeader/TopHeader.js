import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Avatar, Button, Col, Dropdown, Icon, Layout, Menu, Row} from 'antd'
import {Link} from 'react-router-dom'
import {logoutAction} from '../../actions/userAction'
import Cookie from 'universal-cookie'
const {Header} = Layout

class TopHeader extends Component {

	handleLogOut = () => {
		const cookie = new Cookie()
		cookie.set('userid', null)
		this.props.dispatch(logoutAction)
	}

	render() {
		return (
			<Header style={{color:'#fff',textAlign:'center'}}>
				<Row>
					<Col span={8}>
						<Menu
							theme="dark"
							mode="horizontal"
							defaultSelectedKeys={['m1']}
							style={{ lineHeight: '64px' }}
						>
							<Menu.Item key="m1"><Link to="/" >仓库</Link></Menu.Item>
							<Menu.Item key="m2">市场</Menu.Item>
							<Menu.Item key="m3"><Link to="/profile" >个人</Link></Menu.Item>
						</Menu>
					</Col>
					<Col span={10}>

					</Col>
					<Col span={4}>
						{this.props.currUser ?
							<>
								<Avatar src={this.props.currUser.avatar_url} style={{backgroundColor: '#87d068',marginRight:20}} icon="user" />
								<Dropdown overlay={
									<Menu>
										<Menu.Item>
											<a target="_blank" rel="noopener noreferrer" href="http://www.cnblogs.com/hai-cheng/">个人中心</a>
										</Menu.Item>
										<Menu.Item onClick={this.handleLogOut}>
											退出登录
										</Menu.Item>
									</Menu>
								}>
								<span className="ant-dropdown-link" href={"#"} style={{color:'#fff',cursor:'pointer'}}>
									{this.props.currUser.username} <Icon type="down" />
								</span>
								</Dropdown>
							</>
						:
							<Button type={"primary"} >
								<a href='https://github.com/login/oauth/authorize?client_id=3672b8255f18495d5093' target={''}>登录</a>
							</Button>}
					</Col>
				</Row>
			</Header>
		)
	}
}

// mapStateToProps这个函数允许我们将 store 中的数据作为 props 绑定到组件上。
function mapStateToProps(state) {
	return {
		currUser: state.userReducer.currUser
	}
}

export default connect(
	mapStateToProps,
)(TopHeader)