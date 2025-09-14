// 404 middleware

function pageNotFound(req, res, next) {
    res.render("error.ejs", {errorCode: "404"})
}

module.exports = pageNotFound;