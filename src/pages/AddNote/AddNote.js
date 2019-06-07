import React from 'react';
import {addOne} from '../../api/note'
import {
	Form,
	Input,
	Tooltip,
	Icon,
	Button,
} from 'antd';
import { Steps, message } from 'antd';
const { Step } = Steps;

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

		return (
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
				<Form.Item label="笔记标题" style={{}}>
					{getFieldDecorator('title', {
						rules: [
							{
								required: true,
								message: '请输入标题!',
							},
						],
					})(<Input />)}
				</Form.Item>

				<Form.Item label={
					<span>
              简介&nbsp;
						<Tooltip title="请输入15字以内的简介">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
				}>
					{getFieldDecorator('desc', {
						rules: [
							{
								max: 20,
								message: '字数超过了20!',
							},
							{
								required: true,
								message: '请输入简介',
							},
						],
					})(<Input />)}
				</Form.Item>

				<Form.Item>
					<Button type={'parimay'}>确认</Button>
				</Form.Item>
			</Form>
		);
	}
}

const WrappedRegistrationForm = Form.create({ name: 'AddNote' })(RegistrationForm);

const AddNote = () => (
	<div
		style={{
			width: '80%',
			marginLeft: 0
		}}
	>
		<WrappedRegistrationForm/>
	</div>
)


export default AddNote
