const JWT = require("jsonwebtoken");
const plan = require(".../models/Plan.model");

const createPlan = async () => {
    let userPlan = await plan.findById(id);
    if (userPlan) throw new Error("Plan already exists");
    await userPlan.save();
}

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