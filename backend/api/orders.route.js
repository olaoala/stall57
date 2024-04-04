import express from 'express'
import OrdersCtrl from './orders.controller.js'

const router = express.Router()

router.route('/').get((req, res) => res.send('hello world'))

router
.route('/orders')
.post(OrdersCtrl.apiPostOrders)
.put(OrdersCtrl.apiUpdateOrders)


export default router