interface IUser {
	_id: string
	name: string
	email: string
	password: string
	role: string
	valid: boolean
	code: number
	createAt: Date
	updateAt: Date
}

export type { IUser }
