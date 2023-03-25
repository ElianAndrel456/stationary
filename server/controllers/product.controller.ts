import { RequestHandler } from 'express'
import { Brand } from '../models/Brand'
import { Category } from '../models/Category'
import { Product } from '../models/Product'

const getProductOnsale: RequestHandler = async (req, res) => {
	try {
		const products = await Product.find({ sale: true })
		const sendProducts = products.map((product) => {
			return {
				_id: product._id,
				name: product.name,
				description: product.description,
				price_sell: product.price_sell,
				img: product.img,
				stock: product.stock,
				category: product.category,
				brand: product.brand,
			}
		})
		res.json(sendProducts)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

const createProduct: RequestHandler = async (req, res) => {
	try {
		const {
			name,
			description,
			price_buy,
			price_sell,
			stock,
			category_id,
			brand_id,
			provider,
			sale,
		} = req.body

		const category = await Category.findById(category_id)
		const brand = await Brand.findById(brand_id)
		const newProduct = new Product({
			name,
			description,
			price_buy,
			price_sell,
			stock,
			category: category
				? {
						_id: category._id,
						name: category.name,
				  }
				: '',
			brand: brand ? { _id: brand._id, name: brand.name } : '',
			provider,
			sale,
		})

		await newProduct.save()
		res.json(newProduct)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}
const deleteProduct: RequestHandler = async (req, res) => {
	try {
		const { id } = req.params
		const product = await Product.findByIdAndDelete(id)
		res.status(200).json(product)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}
const getAllProducts: RequestHandler = async (req, res) => {
	try {
		const products = await Product.find()
		res.status(200).json(products)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

const getProduct: RequestHandler = async (req, res) => {
	try {
		const { id } = req.params
		const product = Product.findById(id)
		res.status(200).json(product)
	} catch (error) {
		res.status(500).json({ message: 'Something goes wrong', error })
	}
}

export default {
	createProduct,
	deleteProduct,
	getAllProducts,
	getProduct,
	getProductOnsale,
}
