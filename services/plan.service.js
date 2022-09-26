const JWT = require("jsonwebtoken");
const Plan = require("../models/Plan.model");
const uuid = require("uuid");
const plan = require(".../models/Plan.model");

const createPlan = async () => {
    let userPlan = await plan.findById(id);
    if (userPlan) throw new Error("Plan already exists");
    await userPlan.save();
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
const updatePlan = async () => {
    let updatedPlan = await plan.findById(id);
    if(!updatedPlan) throw new Error("plan is updated");
    await updatedPlan.save();
}

const deletePlan = async () => {
    let deleted = await plan.findById(id);
    if(!deleted) throw new Error("plan is not deleted");
    await deleted.save();
}

module.exports = {createPlan, updatePlan, deletePlan};