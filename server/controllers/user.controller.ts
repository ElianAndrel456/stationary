import { RequestHandler } from 'express'
import { User } from '../models/User'
import { generateNumberFourDigits } from '../utils/generateNumber'
import bjcryptjs from 'bcryptjs'
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import CodeHTML from '../template/CodeHTML'

const generateCodeUser: RequestHandler = async (req, res) => {
	try {
		const { name, email, password } = req.body

		//TODO: generate Code User with 4 digits
		const code = generateNumberFourDigits()

		if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
			return res.status(400).json({
				message:
					'Password must be at least 8 characters, contain at least one letter and one number',
			})
		}

		const salt = bjcryptjs.genSaltSync(10)
		const passwordHash = bjcryptjs.hashSync(password, salt)

		const newUser = new User({
			name,
			email,
			password: passwordHash,
			code,
		})

		//TODO: send email with code
		const transport = nodemailer.createTransport({
			host: 'sandbox.smtp.mailtrap.io',
			port: 2525,
			auth: {
				user: 'f4b6018d5089af',
				pass: '51bad135192ae7',
			},
		})

		// var htmlstream = fs.createReadStream("content.html");
		let info = await transport.sendMail({
			from: 'Elian test', // sender address
			to: 'bar@example.com, baz@example.com', // list of receivers
			subject: 'Hello ✔', // Subject line
			html: CodeHTML(code), // html body
		})
		console.log(info.messageId)

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
		const { email } = req.query
		console.log(email)

		const { code } = req.body
		const findUser = await User.findOne({ email })
		if (!findUser) {
			res.status(404).json({ message: 'User not found' })
		}
		if (findUser!.code !== code) {
			res.status(404).json({ message: 'Code not found' })
		}
		const findEmail = await User.findOneAndUpdate({ email }, { valid: true }, { new: true })

		const token = jwt.sign({ id: findEmail!._id }, 'secretkey', {
			expiresIn: '1d',
		})
		console.log(token)

		res.status(201).json({
			token,
			name: findEmail!.name,
			email: findEmail!.email,
		})
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

const loginUser: RequestHandler = async (req, res) => {
	try {
		const { email, password } = req.body
		const findUser = await User.findOne({ email })
		if (!findUser) {
			res.status(404).json({ message: 'User not found' })
		}
		const comparePassword = bjcryptjs.compareSync(password, findUser!.password)
		if (!comparePassword) {
			res.status(404).json({ message: 'Password not found' })
		}
		const token = jwt.sign(findUser!._id, 'secretkey', {
			expiresIn: '1h',
		})

		res.status(201).json({ token, name: findUser!.name, email: findUser!.email })
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}
const logoutUser: RequestHandler = async (req, res) => {}

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

export default { createUser, createUserAdmin, generateCodeUser, getUsers, modifyUser, deleteUser }
