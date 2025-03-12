const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    date: String,
    time: String
});

module.exports = mongoose.model("Appointment", appointmentSchema);
