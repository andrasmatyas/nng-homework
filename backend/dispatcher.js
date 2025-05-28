import express from 'express'
import userService from './apis/userService.js'
import imageService from './apis/imageService.js'
import fibonacciService from './apis/fibonacciService.js'
import multiplyMatricesService from './apis/multiplyMatricesService.js'
const router = express.Router()
router.get('/user', userService)
router.get('/image', imageService)
router.get('/fibonacci', fibonacciService)
router.get('/matrix', multiplyMatricesService)

export default router
