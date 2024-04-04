import OrdersDAO from "../dao/orders.DAO";


export default class OrdersController{
    static async apiPostOrders(req, res, next){
        try{
            const orderId = req.body.order_Id
            const product = req.body.text
            const userInfo ={
                name : req.body.name,
                id :req.body.user_id
            }
            const date = new Date()

            const OrdersResponse = await OrdersDAO.addOrders(
                orderId,
                product,
                userInfo,
                date,
            )
            res.json({status: 'success'})
        } catch(e){
            res.status(500).json({error: e.message})
        }
    }
}