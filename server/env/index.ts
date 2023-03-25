import dotenv from 'dotenv'

dotenv.config()

export default {
	MONGO_URI:
		process.env.NODE_ENV === 'production'
			? process.env.MONGO_URI || ''
			: process.env.MONGO_URI_DEV || '',
	PORT: process.env.PORT || 3000,
}
