const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/menuvegano", (req, res) => {
    res.render("menuvegano");
});

module.exports = router;