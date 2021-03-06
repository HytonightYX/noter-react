import axios from 'axios'
import {API_URL} from '../constants'
/**
 * 获取所有笔记
 * @returns {Promise<AxiosPromise>}
 */
export async function findAll() {
	return axios({
		url: `${API_URL}/notes`,
		method: 'get',
	});
}

/**
 * 根据id获取一篇笔记
 * @param id 笔记id
 * @returns {Promise<AxiosPromise>}
 */
export async function findById(id) {
	return axios({
		url: `${API_URL}/notes/${id}`,
		method: 'get',
	});
}

/**
 * 添加一篇笔记
 * @param note 新笔记
 * @returns {Promise<AxiosPromise>}
 */
export async function addOne(note) {
	return axios({
		url: `${API_URL}/notes`,
		method: 'post',
		data: note
	});
}

/**
 * 根据所有者id获取他的所有笔记
 * @param id
 * @returns {Promise<AxiosPromise>}
 */
export async function findByOwnerId(id) {
	return axios({
		url: `${API_URL}/notes/owner/${id}`,
		method: 'get'
	})
}

/**
 * 删除一篇笔记
 * @param id 待删除笔记id
 * @returns {Promise<AxiosPromise>}
 */
export async function deleteById(id) {
	return axios({
		url: `${API_URL}/notes/${id}`,
		method: 'delete',
		data: {
			del: true
		}
	});
}

/**
 * 根据id 和 用户修改笔记内容
 * @param param 封装 id 和 text 的对象
 * @returns {Promise<AxiosPromise>}
 */
export async function updateText(param) {
	return axios({
		url: `${API_URL}/notes`,
		method: 'patch',
		data: {
			id: param.id,
			text: param.text,
			title: param.title
		}
	});
}
