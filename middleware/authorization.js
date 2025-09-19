function isAuthenticated (req, res, next) {
    if (req.session.allowed) {
        next();
    } else {
        if (req.baseUrl.includes('games')) {
            res.render("error.ejs", {errorCode: "403", errorMessage: "Session expired! Please log in again."});
        } else {
            res.redirect("/login");
        }
    }
}

module.exports = isAuthenticated;