import mongoose from 'mongoose'
import { IProduct } from '../types/Product'
import { brandSchema } from './Brand'
import { categorySchema } from './Category'

const productSchema = new mongoose.Schema<IProduct>(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
			trim: true,
			unique: true,
		},
		description: {
			type: String,
			trim: true,
		},
		stock: {
			type: Number,
			default: 0,
		},
		price_buy: {
			type: Number,
			default: 0,
		},
		price_sell: {
			type: Number,
			default: 0,
		},
		img: {
			type: String,
			default: 'https://media.s-bol.com/mO7MJqVMgJLA/550x550.jpg',
		},
		category: {
			type: categorySchema,
		},
		brand: {
			type: brandSchema,
		},
		provider: {
			type: String,
			trim: true,
		},
		sale: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

export const Product = mongoose.model('Product', productSchema)
