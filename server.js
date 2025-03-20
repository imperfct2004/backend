require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());

// Connect to MongoDB
mongoose.set("strictQuery", false);
if (!process.env.MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI is missing! Add it to your .env file.");
  process.exit(1); // Stop the app
}

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Default route to check if the server is running
app.get("/", (req, res) => {
    res.send("🚀 Server is running!");
});

// Import routes
const userRoutes = require("./routes/userRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
