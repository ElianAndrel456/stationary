import { Router } from 'express'
import categoryController from '../controllers/category.controller'

//TODO: Validations and Autorization

const router = Router()
router.get('/', categoryController.getAllCategories)
router.get('/:id', categoryController.getCategory)
router.post('/', categoryController.createCategory)
router.delete('/:id', categoryController.deleteCategory)
export default router
