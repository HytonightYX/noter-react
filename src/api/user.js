import axios from 'axios'

/**
 * 根据id获取用户详情
 * @param id 用户id
 * @returns {Promise<AxiosPromise>}
 */
export async function getUserProfileById(id) {
	return axios(`http://localhost:3030/api/users/${id}`);
}

/**
 * 更新一个用户
 * @param user 传入新用户对象
 * @returns {Promise<AxiosPromise>}
 */
export async function updateUserProfile(user) {
	return axios({
		url: `http://localhost:3030/api/users/${user._id}`,
		method: 'patch',
		data: user
	});
}
