import React, { Component } from 'react';
import {Layout, Row, Col, Avatar, Input, Menu, Dropdown, Icon, Badge, Button, message} from 'antd'
import './Home.css';
import Cookies from 'universal-cookie';
import NoteCard from '../../components/NoteCard/NoteCard'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import NoteRepo from '../../components/NoteRepo/NoteRepo'

const { Header, Content, Footer } = Layout;
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

class Home extends Component {
	state = {
		login: false,
		userName: ''
	}

	componentWillMount() {
		const cookies = new Cookies();

		if (cookies.get('userName') === undefined) {
			cookies.set('login', '0', { path: '/' });
			cookies.set('userName', null, { path: '/' });
		}

		this.setState({
			login: cookies.get('login') !== '0',
			userName: cookies.get('userName')
		}, () => {
			console.log(this.state)
		})
	}

	handleLogin = () => {
		console.log("点击了登陆按钮");
		const cookies = new Cookies();

		if (this.state.login) {
			cookies.set('login', '0', { path: '/' });
			message.success('登出成功');
		} else {
			cookies.set('login', '1', { path: '/' });
		}

		this.setState(prev => ({
			login: !prev.login
			}))
	}

	render() {
		return (
			<div>
				<Layout>
					<Header style={{color:'#fff',textAlign:'center'}}>
						<Row>
							<Col span={8}>
								<Menu
									theme="dark"
									mode="horizontal"
									defaultSelectedKeys={['m1']}
									style={{ lineHeight: '64px' }}
								>
									<Menu.Item key="m1">笔记仓库</Menu.Item>
									<Menu.Item key="m2">nav 2</Menu.Item>
									<Menu.Item key="m3">nav 3</Menu.Item>
								</Menu>
							</Col>
							<Col span={10}>

							</Col>
							<Col span={4}>
								{this.state.login ?
									<>
										<Avatar style={{backgroundColor: '#87d068',marginRight:20}} icon="user" />
										<Dropdown overlay={menu}>
											<span className="ant-dropdown-link" ref="#" style={{color:'#fff',cursor:'pointer'}}>
												Hi-Sen
												<Icon type="down" />
											</span>
										</Dropdown>
									</>
								:
									<Button type={"primary"}>
										<Link to="/login">登录</Link>
									</Button>
								}

							</Col>
						</Row>
					</Header>
					<Content style={{ padding: '0 50px', marginTop: 64 }}>
						<div style={{
							background: '#fff',
							padding: 24,
							minHeight: '700px',
						}}>
							<NoteRepo />
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Noter ©2019 Created by HytonightYX
					</Footer>
				</Layout>
			</div>
		)
	}
}

export default connect()(Home)
