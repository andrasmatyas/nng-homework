import express from 'express'
import userService from './apis/userService.js'
import imageService from './apis/imageService.js'
import fibonacciService from './apis/fibonacciService.js'
import multiplyMatricesService from './apis/multiplyMatricesService.js'
const router = express.Router()
router.post('/user', userService)
router.post('/image', imageService)
router.post('/fibonacci', fibonacciService)
router.post('/matrix', multiplyMatricesService)

export default router
