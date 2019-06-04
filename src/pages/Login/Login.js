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

	componentWillMount() {
		const cookies = new Cookies();
		cookies.set('login', '0', { path: '/' });
		cookies.set('userName', null, { path: '/' });
	}

	componentDidMount(){
		let canvas = document.createElement('canvas');
		canvas.setAttribute("id", "canvas");
		canvas.width ='500';
		canvas.height ='500';
		canvas.style.position ='absolute';
		canvas.style.top = 0;
		canvas.style.left = 0;
		canvas.style.zIndex = -1;
		canvas.style.pointerEvent = 'none';
		document.body.appendChild(canvas);
		console.log('did');
		this.methods();
	}

	methods = () =>{
		document.addEventListener('touchmove', function (e) {
			e.preventDefault()
		})
		var c = document.getElementsByTagName('canvas')[0],
			x = c.getContext('2d'),
			pr = window.devicePixelRatio || 1,
			w = window.innerWidth,
			h = window.innerHeight,
			f = 90,
			q,
			m = Math,
			r = 0,
			u = m.PI*2,
			v = m.cos,
			z = m.random;
		console.log('c',c);

		c.width = w*pr
		c.height = h*pr
		x.scale(pr, pr)
		x.globalAlpha = 0.6
		function i(){
			x.clearRect(0,0,w,h)
			q=[{x:0,y:h*.7+f},{x:0,y:h*.7-f}]
			while(q[1].x<w+f) d(q[0], q[1])
		}
		function d(i,j){
			x.beginPath()
			x.moveTo(i.x, i.y)
			x.lineTo(j.x, j.y)
			var k = j.x + (z()*2-0.25)*f,
				n = y(j.y)
			x.lineTo(k, n)
			x.closePath()
			r-=u/-50
			x.fillStyle = '#'+(v(r)*127+128<<16 | v(r+u/3)*127+128<<8 | v(r+u/3*2)*127+128).toString(16)
			x.fill()
			q[0] = q[1]
			q[1] = {x:k,y:n}
		}
		function y(p){
			var t = p + (z()*2-1.1)*f
			return (t>h||t<0) ? y(p) : t
		}
		document.onclick = i
		document.ontouchstart = i
		i()
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			console.log('Received values of form: ', values);
			if (!err && values.userName === 'aa' && values.password === 'bb') {
				message.success('登陆成功');

				this.setState( prev => ({
					login: !prev.login
				}), () => {
					const cookies = new Cookies();
					if (values.remember) {
						cookies.set('login', '1', { path: '/' });
						cookies.set('userName', values.userName, { path: '/' });
					}
				})

			} else {
				message.error('登陆失败');
			}
		});
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