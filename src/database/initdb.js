const mongoose = require("mongoose")

const db = "mongodb+srv://vercel-admin-user:sZPp54OVjWZ3Oey7@cluster0.ou28rrb.mongodb.net/?retryWrites=true&w=majority"
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error))
module.exports = { mongoose }