const express = require("express");
const User = require("../models/User");
const router = express.Router();

// ✅ Fix: Add a route for "/api/users"
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Register User
router.post("/register", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get list of doctors
router.get("/doctors", async (req, res) => {
    try {
        const doctors = await User.find({ userType: "doctor" });
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
