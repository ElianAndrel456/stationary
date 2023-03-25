import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import env from './env'
import RouterUser from './routes/user.routes'
import RouterProduct from './routes/product.routes'
import RouterCategory from './routes/category.routes'
import RouterBrand from './routes/brand.routes'

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())
app.use('/api/user', RouterUser)
app.use('/api/category', RouterCategory)
app.use('/api/brand', RouterBrand)
app.use('/api/product', RouterProduct)

app.set('port', env.PORT)
