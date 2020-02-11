const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/authController");

// router
//   .post("/", userController.create_a_user)
//   .get("/", userController.get_all_users)
//   .get("/:user_id", userController.get_one_user)
//   .put("/:user_id", userController.update_user)
//   .delete("/:user_id", userController.delete_user);

router.post("/", passport.authenticate("local"), authController.log_in_user);

module.exports = router;
