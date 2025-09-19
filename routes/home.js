const express = require("express")
const router = express.Router()

router.get("/", require("../middleware/authorization.js"));

module.exports = router