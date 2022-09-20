const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const planSchema = new Schema({
    planId: {
        type: String,
    },
    planName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quality: {
        type: String,
        required: true
    },
    resolution: {
        type: String,
        required: true
    },
    devices: {
        type: [String],
        required: true
    },
});

module.export = mongoose.model("plan", planSchema);