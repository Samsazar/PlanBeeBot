const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    tgid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = { User };