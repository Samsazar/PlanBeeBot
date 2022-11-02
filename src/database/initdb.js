import {MongoClient} from "mongodb"

async function connect() {
    try {
        const mongo = await MongoClient.connect(process.env.MONGODB),
            db = mongo.db(process.env.DB);
    } catch(error) {
        console.log(error)
    }
}

connect()

module.exports = { db }