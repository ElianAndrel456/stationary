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
		},
		description: {
			type: String,
			trim: true,
		},
		stock: {
			type: Number,
		},
		price_buy: {
			type: Number,
		},
		price_sell: {
			type: Number,
		},
		img: {
			type: String,
			default:
				'https://www.ikea.com/us/en/images/products/ingolf-chair-black__0712002_PE729202_S5.JPG?f=s',
		},
		category: {
			type: categorySchema,
		},
		brand: {
			type: brandSchema,
		},
		provider: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
		_id: false,
	}
)

export const Product = mongoose.model('Product', productSchema)
