import mongoose from 'mongoose'
import env from '../env'
;(async function () {
	try {
		const db = await mongoose.connect(env.MONGO_URI)
		console.log('MongoDB connected', db.connection.db.databaseName)
	} catch (error) {
		console.log(error)
	}
})()
