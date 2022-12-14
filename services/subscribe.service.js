const JWT = require("jsonwebtoken");
const subscribe = require("../models/subscribe.model");
const uuid = require("uuid");

const createSubscription = async (data) => {
    // data.userId = uuid.v4();
    // data.planId = uuid.v4();
    const today = new Date();
    data.start_date = today; 
    data.expiry_date = new Date(today.getFullYear() + 10, today.getMonth() + 1, today.getDate())
    await new subscribe(data).save();
    return (data);
}

const getActiveSubscripition = async({userId}) => {
    let findUser = await subscribe.findOne({
        userId
    });
    const today = new Date();
    if(!findUser && findUser.expiry_date < today  && findUser.start_date > today) {
        return {
            message: "INACTIVE"
        }
    }
    if(findUser && findUser.expiry_date > today && today > findUser.start_date) {
        return {
            planId: findUser.planId
        }
    }
}

module.exports = {createSubscription, getActiveSubscripition};