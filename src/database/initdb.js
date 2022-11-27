import {MongoClient} from 'mongodb'

export default MongoClient.connect(process.env.MONGODB_URI)
// const mongoose = require("mongoose")

// async function connect() {
//     const db = "mongodb+srv://vercel-admin-user:wuULPQ1Vo6EhQoJD@cluster0.ou28rrb.mongodb.net/?retryWrites=true&w=majority"
//     mongoose
//         .connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
//         .then((res) => console.log('Connected to DB'))
//         .catch((error) => console.log(error))
// }

// connect()
// module.exports = { connect }

