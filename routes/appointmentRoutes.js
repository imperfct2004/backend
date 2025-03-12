const express = require("express");
const Appointment = require("../models/Appointment");
const router = express.Router();

// Book an appointment
router.post("/book-appointment", async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        await newAppointment.save();
        res.status(201).json({ message: "Appointment booked successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;