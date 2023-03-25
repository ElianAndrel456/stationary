import { RequestHandler } from 'express'
import { User } from '../models/User'
import { generateNumberFourDigits } from '../utils/generateNumber'
import bjcryptjs from 'bcryptjs'

const generateCodeUser: RequestHandler = async (req, res) => {
	try {
		const { name, email, password } = req.body

		//TODO: generate Code User with 4 digits
		const code = generateNumberFourDigits()

		const salt = bjcryptjs.genSaltSync(10)
		const passwordHash = bjcryptjs.hashSync(password, salt)

		const newUser = new User({
			name,
			email,
			passwordHash,
			code,
		})

		//TODO: send email with code
		//TODO: save code and email in DB
		await newUser.save()
		//TODO: return code
		res.status(201).json(newUser)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

const createUser: RequestHandler = async (req, res) => {
	try {
		const { name, email, password } = req.body
		const newUser = new User({
			name,
			email,
			password,
		})
		await newUser.save()

		res.status(201).json(newUser)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

const modifyUser: RequestHandler = async (req, res) => {}

const getUsers: RequestHandler = async (req, res) => {
	try {
		const users = await User.find()
		res.status(200).json(users)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

const deleteUser: RequestHandler = async (req, res) => {
	try {
		const { id } = req.params
		const user = await User.findByIdAndDelete(id)
		res.status(200).json(user)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

const createUserWorked: RequestHandler = async (req, res) => {
	try {
		const { username, email, password } = req.body
		const newUser = { username, email, password }
		res.json(newUser)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

const createUserAdmin: RequestHandler = async (req, res) => {
	try {
		const { username, email, password } = req.body
		const newUser = { username, email, password }
		res.json(newUser)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

export default { createUser, createUserAdmin, generateCodeUser }
