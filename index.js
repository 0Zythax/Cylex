// server
// node --env-file-if-exists=.env index.js

const express = require("express")
const session = require("express-session")
const application = express()
const fs = require("fs");

application.set("view engine", "ejs")
application.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false, maxAge: 6000000}
}));

const routeOrchestrator = require("./routes/main.js")
application.use(routeOrchestrator)
application.listen(process.env.PORT, () => {
    console.log("Cylex started on port 3000 [express.js]")
})