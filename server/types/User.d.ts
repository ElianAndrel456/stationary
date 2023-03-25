interface IUser {
	_id: string
	name: string
	email: string
	password: string
	role: string
	valid: boolean
	code: number
}

export type { IUser }
