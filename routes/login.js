const express = require("express");
const router = express.Router();

router.post("/", express.urlencoded({ extended: false }), (req, res) => {
    if (req.body && req.body.key && req.body.key == process.env.ACCESS_KEY) {
        req.session.regenerate(function(err) {
            if (err) return res.render("../views/error.ejs", {errorCode: 500})
            req.session.allowed = true
            req.session.save(function (err) {
                if (err) return res.render("../views/error.ejs", {errorCode: 500})
                res.redirect('/')
            })
        })
    } else {
        res.render("../views/login.ejs", {error: "Incorrect key.", lastPW: req.body.key || ""})
    }
})

router.get("/", (req, res) => {
    res.render("../views/login.ejs")
})

module.exports = router