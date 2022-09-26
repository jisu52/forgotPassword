const {
    createPlan,
    updatePlan,
    deletePlan 
} = require ("../services/plan.service");

const createPlanController = async(req, res, next) => {
    const createPlanService = await createPlan(req.body);
    return res.json(createPlanService);
}

const updatePlanController = async(req, res, next) => {
    const updatePlanService = await updatePlan(req.body);
    return res.json(updatePlanService);
}

const deletePlanController = async(req, res, next) => {
    const deletePlanService = await deletePlan(req.body);
    return res.json(deletePlanService);
}

module.exports = {
    createPlanController,
    updatePlanController,
    deletePlanController
};