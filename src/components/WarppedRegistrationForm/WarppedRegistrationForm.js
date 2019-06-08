import React from 'react'
import {updateUserAction} from '../../actions/userAction'
import {Button, Form, Input, message} from 'antd'
import history from '../../history'
import {connect} from 'react-redux'

class RegistrationForm extends React.Component {
	state = {
		confirmDirty: false,
		autoCompleteResult: [],
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				this.props.dispatch(updateUserAction({
					_id: this.props.currUser._id,
					username: values.username,
					password: values.password,
					date: new Date(),
				}))
					.then(() => {
						message.success('更新成功!', 1)
					})
					.catch(err => {
						message.error('更新失败', 1)
					})
			}
		});
	};

	handleConfirmBlur = e => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	};

	compareToFirstPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback('Two passwords that you enter is inconsistent!');
		} else {
			callback();
		}
	};

	validateToNextPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && this.state.confirmDirty) {
			form.validateFields(['confirm'], { force: true });
		}
		callback();
	};

	goBack = () => {
		history.goBack()
	}

	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 },
			},
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 16,
					offset: 8,
				},
			},
		};

		return (
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
				<Form.Item label="用户名">
					{getFieldDecorator('username', {
						rules: [
							{
								required: true,
								message: '请输入用户名!',
							},
						],
					})(<Input />)}
				</Form.Item>

				<Form.Item label="邮箱">
					{getFieldDecorator('email', {
						initialValue: '****************',
						rules: [
							// {
							// 	type: 'email',
							// 	message: '请输入正确的邮箱!',
							// },
							{
								required: true,
								message: '请输入邮箱!',
							},
						],
					})(<Input disabled/>)}
				</Form.Item>

				<Form.Item label="修改密码" hasFeedback>
					{getFieldDecorator('password', {
						rules: [
							{
								required: true,
								message: '请输入密码!',
							},
							{
								min:5,max:10,
								message:'密码必须为5~10个字符!'
							},
							{
								validator: this.validateToNextPassword,
							}
						],
					})(<Input.Password />)}
				</Form.Item>
				<Form.Item label="确认密码" hasFeedback>
					{getFieldDecorator('confirm', {
						rules: [
							{
								required: true,
								message: 'Please confirm your password!',
							},
							{
								validator: this.compareToFirstPassword,
							},
						],
					})(<Input.Password onBlur={this.handleConfirmBlur} />)}
				</Form.Item>

				<Form.Item {...tailFormItemLayout}>
					<Button onClick={this.goBack} style={{marginRight: 50}}>
						返回
					</Button>

					<Button type="primary" htmlType="submit">
						确认更新
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

function mapStateToProps(state) {
	return {
		currUser: state.userReducer.currUser
	}
}

const WrappedRegistrationForm = Form.create({name: 'register',})(
	connect(mapStateToProps)(RegistrationForm)
);

export default WrappedRegistrationForm
