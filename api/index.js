const express = require("express");
const app = express();
const router = express.Router();

const userRouter = require("./users");

router.use("/users", userRouter);

module.exports = router;
