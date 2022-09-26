const JWT = require("jsonwebtoken");
const Plan = require("../models/Plan.model");
const uuid = require("uuid");

const createPlan = async (data) => {
    // let userPlan = await Plan.findOne({planId: data.planId});
    // if (userPlan) throw new Error("Plan already exists");
    data.planId = uuid.v4();
    // userPlan = new plan(data);
    // await userPlan.save();
    await new Plan(data).save();
    return (data = {
        planId: Plan._id,
        name: Plan.planName,
        price: Plan.price,
        resolution: Plan.resolution,
        video: Plan.quality
    });
}

const updatePlan = async ({planName, price, quality}) => {
    let updatingPlan = await Plan.find({ planName, price, quality });
    await Plan.updateMany(
        { $set: { Plan: planName } },
        { $set: { Plan: price } },
        { $set: { Plan: quality} },
        { new : true } 
    )
    updatingPlan = new Plan({ planName, price, quality });
    await updatingPlan.save();
}

const deletePlan = async () => {
    let deleted = await Plan.findById(id);
    if(!deleted) throw new Error("plan is deleted");
    await deleted.save();
}

module.exports = {createPlan, updatePlan, deletePlan};