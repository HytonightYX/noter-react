import React from 'react';
import {connect} from 'react-redux'
import WrappedRegistrationForm from '../../components/WarppedRegistrationForm/WarppedRegistrationForm'

const Profile = () => (
	<div style={{
		width: '500px',
		margin: '20px auto'
	}}>
		<WrappedRegistrationForm/>
	</div>
)

function mapStateToProps(state) {
	return {
		currUser: state.userReducer.currUser
	}
}

export default connect(mapStateToProps)(Profile)
