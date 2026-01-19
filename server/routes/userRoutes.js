const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* REGISTER */
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: "Email already registered" });
  }

  const user = new User({
    userId: "u_" + Date.now(),
    email,
    password
  });

  await user.save();
  res.json({ message: "Registration successful" });
});

/* LOGIN */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  res.json({
    userId: user.userId,
    email: user.email
  });
});

module.exports = router;
