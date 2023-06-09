import { RequestHandler } from 'express'
import { Category } from '../models/Category'
//Todo: Validations and Autorization

const createCategory: RequestHandler = async (req, res) => {
	try {
		const { name } = req.body
		const newCategory = new Category({ name })
		await newCategory.save()
		res.json(newCategory)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

const deleteCategory: RequestHandler = async (req, res) => {
	try {
		const { id } = req.params
		const category = await Category.findByIdAndDelete(id)
		res.status(200).json(category)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}
const getAllCategories: RequestHandler = async (req, res) => {
	try {
		const categories = await Category.find()
		res.status(200).json(categories)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

const getCategory: RequestHandler = async (req, res) => {
	try {
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

export default {
	createCategory,
	deleteCategory,
	getAllCategories,
	getCategory,
}
