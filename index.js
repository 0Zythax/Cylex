// server

const express = require("express")
const session = require("express-session")
const helmet = require("helmet")
const application = express()

// setup server, sessions and security
application.set("view engine", "ejs")
application.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false, maxAge: 60000}
})); application.use(helmet())

// setup routes and start server
const routeOrchestrator = require("./routes/main.js")
application.use(routeOrchestrator)
application.listen(process.env.PORT, () => {
    console.log("Application started")
})