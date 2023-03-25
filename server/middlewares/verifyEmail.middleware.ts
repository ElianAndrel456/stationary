import { RequestHandler } from 'express'
import { User } from '../models/User'

export const verifyEmail: RequestHandler = async (req, res, next) => {
	const { email, password } = req.body

	const existUser = await User.findOne({ email })

	if (existUser) {
		if (existUser.valid) {
			return res.status(400).json({ message: 'Email already exist' })
		} else {
			return res.status(400).json({ message: 'Email already exist but not valid' })
		}
	}

	next()
}
