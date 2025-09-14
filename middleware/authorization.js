// auth middleware

function isAuthenticated (req, res, next) {
    if (req.session.allowed) {
        next();
    } else {
        res.redirect("/login");
    }
}

module.exports = isAuthenticated;