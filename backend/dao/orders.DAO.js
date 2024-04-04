import mongodb from 'mongodb'
const ObjectId = mongodb.ObjectId

let orders


export default class OrdersDAO{
    static async injectDB(conn){
        if(orders){
            return
        }
        try{
            orders = await conn.db(process.env.ORDERS_NS).collection('orders')
        }catch(e){
            console.error(
                `Unable to establish connection : ${e}`,
            )
        }

    }

    static async addOrders (orderId, product,user,date){
        try{
            const ordersDoc = {name: user.name,
            user_id: user._id,
            date:date,
            product:product,
            orderId: ObjectId(orderId),
    }
    return await orders.insertOne(ordersDoc)
         } catch(e){
            console.error(`Unable to post Order: ${e}`)
            return{error:e}
        }
    }

    
}