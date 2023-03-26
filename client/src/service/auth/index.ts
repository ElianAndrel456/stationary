import axios from 'axios'
import config from '../../config'

interface IGenerateCode {
	email: string
	name: string
	password: string
}

const generateCode = async ({ email, name, password }: IGenerateCode) => {
	return await (
		await axios.post(config.backendBaseUrl + '/api/user/code', {
			email,
			name,
			password,
		})
	).data
}

export default {
	generateCode,
}
