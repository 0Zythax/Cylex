const express = require("express")
const router = express.Router()
const fs = require("fs")

router.get("/:game", require("../middleware/authorization.js"), (req, res) => {
    const game = req.params.game;
    
    if (!game) {
        res.status(403).send("No headers sent!")
        return
    }

    if (fs.existsSync(`public/games/swf/${game}.swf`)) {
        res.render("flashGame.ejs", {gamePath: `/games/swf/${game}.swf`})
        return
    }

    res.status(404).send("Game does not exist!");
})

module.exports = router