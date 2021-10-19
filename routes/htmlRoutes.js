// IMPORTING EXPRESS ROUTER & PATH
const router = require('express').Router();
const path = require('path');


// GET EXERCISE PAGE
router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// GET STATS PAGE
router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// GET HOME PAGE
// router.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// EXPORTING ROUTES for HTML
module.exports = router;