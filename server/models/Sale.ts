import mongoose, { Schema } from 'mongoose'

const saleSchema = new Schema(
	{
		id: mongoose.Types.ObjectId,
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

export const Sale = mongoose.model('Sale', saleSchema)
