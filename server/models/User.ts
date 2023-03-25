import mongoose, { Schema } from 'mongoose'
import { IUser } from 'server/types/User'

const UserSchema = new Schema<IUser>(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
			minLength: [3, 'Name must be at least 3 characters'],
			maxLength: [25, 'Name must be less than 25 characters'],
			trim: true,
		},

		email: {
			type: String,
			require: [true, 'Email is required'],
			unique: true,
			lowercase: true,
			trim: true,
			validate: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
		},

		password: {
			type: String,
			required: true,
			minLength: 6,
			trim: true,
			validate: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
		},

		role: { type: String, default: 'user' },

		valid: { type: Boolean, default: false },

		code: { type: Number, require: [true, 'Code is Required'], trim: true, validate: /\d{4}/ },
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

export const User = mongoose.model('User', UserSchema)
