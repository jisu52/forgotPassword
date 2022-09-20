const {
  signUpController,
  resetPasswordRequestController,
  resetPasswordController,
} = require("../controllers/auth.controller");

const {
  createPlan,
  updatePlan,
  deletePlan 
} = require ("../controllers/plan.controller");

const router = require("express").Router();

router.post("/auth/signup", signUpController);
router.post("/auth/requestResetPassword", resetPasswordRequestController);
router.post("/auth/resetPassword", resetPasswordController);

router.post("/plan/createPlan", createPlanController);
router.post("/plan/updatePlan", updatePlanController);
router.delete("/plan/deletePlan", deletePlanController);

module.exports = router;
