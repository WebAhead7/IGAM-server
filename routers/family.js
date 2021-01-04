const express = require("express");
const { getAllFamily } = require("../database/models/family");
const { createFamily } = require("../handlers/family");
const { addFamilyCode } = require("../middleware/family");
const { verifyUser } = require("../middleware/auth");
const router = express.Router();

router.post("/", verifyUser("admin"), addFamilyCode, createFamily);
router.get("/", getAllFamily);
module.exports = router;
