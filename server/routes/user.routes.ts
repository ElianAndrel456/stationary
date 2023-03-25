import { Router } from 'express'
import userController from '../controllers/user.controller'
import { verifyEmail } from '../middlewares/verifyEmail.middleware'

const router = Router()

router.post('/', userController.createUser)
router.post('/code', [verifyEmail], userController.generateCodeUser)
router.post('/worked')
router.post('/admin', userController.createUserAdmin)

export default router
