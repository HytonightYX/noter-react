import React from 'react';
import {
	Form,
	Input,
	Tooltip,
	Icon,
	Button,
} from 'antd';

class RegistrationForm extends React.Component {
	state = {
		confirmDirty: false,
		autoCompleteResult: [],
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

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
					{getFieldDecorator('email', {
						rules: [
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your E-mail!',
							},
						],
					})(<Input />)}
				</Form.Item>

				<Form.Item label="邮箱">
					{getFieldDecorator('email', {
						rules: [
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your E-mail!',
							},
						],
					})(<Input />)}
				</Form.Item>
				<Form.Item
					label={
						<span>
              Nickname&nbsp;
							<Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
					}
				>
					{getFieldDecorator('nickname', {
						rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
					})(<Input />)}
				</Form.Item>

				<Form.Item {...tailFormItemLayout}>
					<Button type="primary" htmlType="submit">
						确认更新
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

const Profile = () => (
	<div style={{
		width: '800px',
		padding: '20px auto'
	}}>
		<WrappedRegistrationForm/>
	</div>
)

export default Profile
