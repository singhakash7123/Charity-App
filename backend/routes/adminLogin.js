const express = require("express");
const router = express.Router();
const db = require("../db");

// Admin Login API
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email & Password required!" });
    }

    const sql = "SELECT * FROM admins WHERE email = ? AND Admin_Password = ?";

    db.query(sql, [email, password], (err, result) => {
        if (err) return res.status(500).json({ message: "Database Error", error: err });

        if (result.length === 0) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }

        return res.json({
            message: "Login Successful",
            admin: result[0]
        });
    });
});

module.exports = router;