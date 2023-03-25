import { Router } from 'express'
import brandController from '../controllers/brand.controller'

const router = Router()

router.get('/', brandController.getAllBrands)
router.get('/:id', brandController.getBrand)
router.post('/', brandController.createBrand)
router.delete('/:id', brandController.deleteBrand)

export default router
