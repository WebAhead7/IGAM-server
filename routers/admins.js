const express = require("express");
const { adminSignIn, adminSignUp } = require("../handlers/admin");
const { checkUserIfExists } = require("../middleware/users");
const router = express.Router();

router.post("/sign-in", adminSignIn);
router.post("/sign-up", checkUserIfExists, adminSignUp);

module.exports = router;
