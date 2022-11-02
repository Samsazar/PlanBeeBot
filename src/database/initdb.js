import {MongoClient} from "mongodb"

const mongo = MongoClient.connect(process.env.MONGODB),
    db = mongo.db(process.env.DB);

module.exports = { db }