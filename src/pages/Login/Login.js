import React from 'react';
import {
	Form, Icon, Input, Button, Checkbox, Typography, message
} from 'antd'
import './Login.css'
import indexImg from './img/login.png'
import Cookies from 'universal-cookie';
import {Redirect} from "react-router-dom"

const { Title } = Typography;

class NormalLoginForm extends React.Component {

	state = {
		login: false,
	}

	render() {
		if ( this.state.login ) {
			// 跳转主页
			return <Redirect to="/" />
		}

		const { getFieldDecorator } = this.props.form;
		return (
			<div>
				<div className="container">
					<div className="logoImg">
						<img src={indexImg} alt=""/>
					</div>

					<div className="login">
						<Title level={3}>登陆七牛云</Title>
						<Form onSubmit={this.handleSubmit} className="login-form">
							<Form.Item>
								{getFieldDecorator('userName', {
									rules: [{ required: true, message: 'Please input your username!' }],
								})(
									<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名：游客请输入aa" />
								)}
							</Form.Item>
							<Form.Item>
								{getFieldDecorator('password', {
									rules: [{ required: true, message: 'Please input your Password!' }],
								})(
									<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码：游客请输入bb" />
								)}
							</Form.Item>
							<Form.Item>
								{getFieldDecorator('remember', {
									valuePropName: 'checked',
									initialValue: true,
								})(
									<Checkbox>记住我</Checkbox>
								)}
								<a className="login-form-forgot" href="">忘记密码？</a>
								<Button type="primary" htmlType="submit" className="login-form-button">
									登陆
								</Button>
							</Form.Item>
						</Form>
					</div>

				</div>
			</div>
		);
	}
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login;
