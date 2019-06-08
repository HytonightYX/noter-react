import axios from 'axios'

export async function getUserProfileById(id) {
	return axios(`http://localhost:3030/api/users/${id}`);
}

export async function updateUserProfile(user) {
	return axios({
		url: `http://localhost:3030/api/users/${user._id}`,
		method: 'patch',
		data: user
	});
}
