const {
  signUpController,
  resetPasswordRequestController,
  resetPasswordController,
} = require("../controllers/auth.controller");

const {
  createPlanController,
  updatePlanController,
  deletePlanController
} = require ("../controllers/plan.controller");

const {createSubscriptionController, getActiveSubscripitionController} = require("../controllers/subscribe.controller");

const router = require("express").Router();

router.post("/auth/signup", signUpController);
router.post("/auth/requestResetPassword", resetPasswordRequestController);
router.post("/auth/resetPassword", resetPasswordController);

router.post("/plan/createPlan", createPlanController);
router.put("/plan/updatePlan", updatePlanController);
router.delete("/plan/deletePlan", deletePlanController);

router.post("/subscribe/createSubscription", createSubscriptionController);
router.get("/subscribe/getActiveSubscripition", getActiveSubscripitionController);
module.exports = router;
