import React from "react"
import {addOne} from '../../api/note'
import {Modal, Form, Input, Radio, message} from 'antd'
import {connect} from 'react-redux'
import './AddNoteModal.css'

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
	class extends React.Component {
		render() {
			const { visible, onCancel, onCreate, form } = this.props;
			const { getFieldDecorator } = form;
			return (
				<Modal
					visible={visible}
					title="新建笔记"
					okText="Create"
					onCancel={onCancel}
					onOk={onCreate}
				>
					<Form layout="vertical">
						<Form.Item label="笔记标题">
							{getFieldDecorator('title', {
								rules: [{ required: true, message: '请输入笔记的标题!' }],
							})(<Input />)}
						</Form.Item>
						<Form.Item label="简介">
							{getFieldDecorator('description')(<Input type="textarea" />)}
						</Form.Item>
						<Form.Item className="collection-create-form_last-form-item">
							{getFieldDecorator('modifier', {
								initialValue: 'public',
							})(
								<Radio.Group>
									<Radio value="public">私有</Radio>
									<Radio value="private">分享到市场</Radio>
								</Radio.Group>,
							)}
						</Form.Item>
					</Form>
				</Modal>
			);
		}
	},
);

class AddNoteModal extends React.Component {
	state = {
		visible: false
	};

	showModal = () => {
		this.setState({ visible: true });
	};

	handleCancel = () => {
		this.setState({ visible: false });
	};

	handleCreate = () => {
		const form = this.formRef.props.form;
		form.validateFields((err, values) => {
			if (err) {
				return;
			}
			const newNote = {
				title: values.title,
				description: values.description === '' ? ' ' : values.description,
				owner: this.props.currUser._id
			}

			addOne(newNote)
				.then(() => {
					form.resetFields();
					this.props.reRender()
					message.success('添加笔记成功');
					this.setState({
						loading: false,
						visible: false
					})
				})
				.catch(() => {
					message.error('添加笔记失败,请检查网络连接');
				})
		});
	};

	saveFormRef = formRef => {
		this.formRef = formRef;
	};

	render() {
		return (
			<div>
				<button
					className={'pre-card'}
					style={{
						height: 164
					}}
					onClick={this.showModal}
				>
					<span role={'img'} aria-label={'plus'}>➕ </span>新增笔记
				</button>

				<CollectionCreateForm
					wrappedComponentRef={this.saveFormRef}
					visible={this.state.visible}
					onCancel={this.handleCancel}
					onCreate={this.handleCreate}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currUser: state.userReducer.currUser,
		noteReducer: state.noteReducer
	}
}

export default connect(
	mapStateToProps,
)(AddNoteModal)
