const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
    db.query("SELECT * FROM admins", (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

router.post("/add", (req, res) => {
    db.query("INSERT INTO admins SET ?", req.body, (err) => {
        if (err) throw err;
        res.json({ message: "Admin added" });
    });
});

module.exports = router;
