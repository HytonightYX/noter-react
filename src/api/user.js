import axios from 'axios'

export async function login(params) {
	return axios({
		url: '/api/login',
		method: 'post',
		data: params,
	});
}

export async function postUserRegister(params) {
	return axios({
		url: '/api/register',
		method: 'post',
		data: params,
	});
}

export async function postUserLogout() {
	return axios({
		url: '/api/logout',
		method: 'post',
	});
}

export async function getUserProfileById(id) {
	return axios(`http://localhost:3030/api/users/${id}`);
}