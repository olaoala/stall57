import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
import OrdersDAO from './dao/orders.DAO.js'

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.ORDERS_DB_URI,{
        maxPoolSize : 50,
        connectTimeoutMS: 5000, // Example: 5 seconds
        socketTimeoutMS: 30000, // Example: 30 seconds
        waitQueueTimeoutMS: 2500,
        useNewUrlParser: true
    }
)
.catch(err => {
    console.error('Error connecting to the database:', err.stack); // Changed 'console.log' to 'console.error'
    process.exit(1);
})
.then(async client => {
    await OrdersDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`); // Corrected the log message
    });
});