const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subscribeSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    planId: {
        type: String,
        required: true
    },
    start_date:{
        type: Date,
        required: true,
    },
    expiry_date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        // required: true,
    },
});

module.exports = mongoose.model("subscribe", subscribeSchema);