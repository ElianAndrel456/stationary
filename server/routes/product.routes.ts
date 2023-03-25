import { Router } from 'express'
import productController from '../controllers/product.controller'

const router = Router()

router.get('/', productController.getAllProducts)
router.get('/sale', productController.getProductOnsale)
router.get('/:id', productController.getProduct)
router.delete('/:id', productController.deleteProduct)
router.post('/', productController.createProduct)

export default router
