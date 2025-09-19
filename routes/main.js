const express = require("express")
const router = express.Router()
const fs = require("fs")

fs.readdirSync("./routes").forEach((file) => {
    if (file.endsWith(".js") && file != "main.js" && file != "home.js") {
        const routePath = `/${file.replace(".js", "")}`;
        const route = require(`../routes/${file}`);
        router.use(routePath, route);
    }
});

router.use("/", require("../routes/home.js"))
router.use(express.static("public"))
router.use(require("../middleware/pageNotFound.js"))

module.exports = router