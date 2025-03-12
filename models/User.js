const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    userType: String,
    specialization: String
});

module.exports = mongoose.model("User", userSchema);