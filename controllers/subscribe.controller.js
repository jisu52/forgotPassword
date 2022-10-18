const {
    createSubscription
} = require ("../services/subscribe.service");

const createSubscriptionController = async (req, res, body) => {
    const createSubscribeService = await createSubscription(req.body);
    return res.json(createSubscribeService);
}

const getActiveSubscripitionController = async (req, res, next) => {
    const activeSubscription = await getActiveSubscripition(req.body);
    return res.json(activeSubscription);
}

module.exports = {createSubscriptionController, getActiveSubscripitionController};