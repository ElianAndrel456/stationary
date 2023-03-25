interface IBrand {
	_id: number
	name: string
}
interface ICategory {
	_id: number
	name: string
}

interface IProduct {
	_id: number
	name: string
	description: string
	stock: number
	price_buy: number
	price_sell: number
	img: string
	category: ICategory
	brand: IBrand
	provider: string
}

export type { IProduct, IBrand, ICategory }
