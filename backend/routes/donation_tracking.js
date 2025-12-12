const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
    db.query("SELECT * FROM donation_tracking", (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

router.post("/add", (req, res) => {
    db.query("INSERT INTO donation_tracking SET ?", req.body, (err) => {
        if (err) throw err;
        res.json({ message: "Tracking updated" });
    });
});

module.exports = router;
