import express from 'express'
import cors from 'cors'
import orders from './api/orders.route.js'

const app = express()


app.use(cors())
app.use(express.json())


app.use('/api/v1/orders', orders)
app.use('*', (req, res)=> res.status(404).json({ error:'not found'}))

export default app