const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subscribeSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    planId: {
        type: String,
    },
    created_date:{
        type: Date,
        required: true,
    },
    updated_date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("subscribe", subscribeSchema);