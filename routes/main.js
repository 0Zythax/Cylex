const express = require("express")
const router = express.Router()

const loginRoute = require("../routes/login.js")
const homeRoute = require("../routes/home.js")
const gamesRoute = require("../routes/games.js")
const pageNotFound = require("../middleware/pageNotFound.js")

router.use("/", homeRoute)
router.use("/login", loginRoute)
router.use("/games", gamesRoute)
router.use(express.static("public"))
router.use(pageNotFound)

module.exports = router