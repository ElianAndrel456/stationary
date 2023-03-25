import mongoose, { Schema } from 'mongoose'
import { ICategory } from '../types/Product'

export const categorySchema = new Schema<ICategory>(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
		},
	},
	{
		timestamps: true,
		versionKey: false,
		_id: false,
	}
)

export const Category = mongoose.model('Category', categorySchema)
