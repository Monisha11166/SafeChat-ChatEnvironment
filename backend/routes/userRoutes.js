const express = require("express");
const router = express.Router();
const User = require("../models/User");

// =======================
// Register User
// =======================
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // Create new user
    const user = new User({
      username,
      email,
      password,
      phone
    });

    // Save to MongoDB
    await user.save();

    res.status(201).json({
      message: "User Registered Successfully",
      user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// =======================
// Login User
// =======================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Check password
    if (user.password !== password) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    res.status(200).json({
      message: "Login Successful",
      user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;