function pageNotFound(req, res, next) {
    res.render("error.ejs", {errorCode: "404", errorMessage: "Page Not Found"});
}

module.exports = pageNotFound;