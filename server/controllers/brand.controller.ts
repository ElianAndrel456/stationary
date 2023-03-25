import { RequestHandler } from 'express'
import { Brand } from '../models/Brand'

//! This is the controller for the brand routes
//TODO: Validations and Autorization

const createBrand: RequestHandler = async (req, res) => {
	try {
		const { name } = req.body
		console.log('creating brand')
		const newBrand = new Brand({ name })
		await newBrand.save()
		res.status(201).json(newBrand)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

const deleteBrand: RequestHandler = async (req, res) => {
	try {
		const { id } = req.params
		const brand = await Brand.findByIdAndDelete(id)
		res.status(200).json(brand)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

const getAllBrands: RequestHandler = async (req, res) => {
	try {
		const brands = await Brand.find()
		res.status(200).json(brands)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

const getBrand: RequestHandler = async (req, res) => {
	try {
		const { id } = req.params
		const brand = await Brand.findById(id)
		res.status(200).json(brand)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

export default {
	createBrand,
	deleteBrand,
	getAllBrands,
	getBrand,
}
