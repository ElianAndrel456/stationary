import mongoose, { Schema } from 'mongoose'
import { IBrand } from '../types/Product'

export const brandSchema = new Schema<IBrand>(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

export const Brand = mongoose.model('Brand', brandSchema)
