import React from 'react';
import {connect} from 'react-redux'
import WrappedRegistrationForm from '../../components/WarppedRegistrationForm/WarppedRegistrationForm'
const lgImg = require('../../assets/login.jpg')
const Profile = (props) => (
	<div style={{
		width: '500px',
		margin: '0 auto',
		textAlign: 'center'
	}}>
		{props.userReducer.currUser ?
			<WrappedRegistrationForm/>
		:
			<img src={lgImg} alt=""/>}
	</div>
)

function mapStateToProps(state) {
	return {
		noteReducer: state.noteReducer,
		userReducer: state.userReducer
	}
}

export default connect(
	mapStateToProps,
)(Profile)
