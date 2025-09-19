// auth middleware

function isAuthenticated (req, res, next) {
    if (req.session.allowed) {
        next();
    } else {
        if (req.baseUrl.includes('games')) {
            res.status(403).send("Invalid session!")
        } else {
            res.redirect("/login");
        }
    }
}

module.exports = isAuthenticated;