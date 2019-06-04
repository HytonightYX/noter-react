import axios from 'axios'

/**
 * 获取所有笔记
 * @returns {Promise<AxiosPromise>}
 */
export async function findAll() {
	return axios({
		url: 'http://localhost:3030/api/notes',
		method: 'get',
	});
}

/**
 * 根据id获取一篇笔记
 * @param id
 * @returns {Promise<AxiosPromise>}
 */
export async function findById(id) {
	return axios({
		url: `/api/notes/${id}`,
		method: 'get',
	});
}

/**
 * 添加一篇笔记
 * @returns {Promise<AxiosPromise>}
 */
export async function addOne(note) {
	return axios({
		url: '/api/notes',
		method: 'post',
		data: note
	});
}

/**
 * 删除一篇笔记
 * @returns {Promise<AxiosPromise>}
 */
export async function deleteById(id) {
	return axios({
		url: '/api/notes/' + id,
		method: 'put',
		data: {
			del: true
		}
	});
}

export default {
	findAll,
	findById,
	addOne,
	deleteById,
};
