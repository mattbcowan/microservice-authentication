const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
  .post("/", userController.create_a_user)
  .get("/", userController.get_all_users)
  .get("/:user_id", userController.get_one_user)
  .put("/:user_id", userController.update_user)
  .delete("/:user_id", userController.delete_user);

module.exports = router;
