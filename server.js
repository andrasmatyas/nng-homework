import express from 'express'
import dispatcher from './backend/dispatcher.js'
const app = express()
app.use(express.static('frontend'))
app.use(express.json())
app.use('/api', dispatcher)

app.listen(3000)
