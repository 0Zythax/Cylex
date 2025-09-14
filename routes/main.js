// orchestrates routes

const express = require("express")
const router = express.Router()

const loginRoute = require("./routes/login.js")
const pageNotFound = require("../middleware/pageNotFound.js")

router.use("/login", loginRoute)
router.use(express.static("public"))
router.use(pageNotFound)

module.exports = router