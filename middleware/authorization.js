// auth middleware

function isAuthenticated (req, res, next) {
    if (req.session.allowed) {
        next();
    } else {
        if (req.baseUrl.includes('games')) {
            res.status(403).send("Session expired / doesn't exist! Please refresh the page and login to generate a new one.")
        } else {
            res.redirect("/login");
        }
    }
}

module.exports = isAuthenticated;