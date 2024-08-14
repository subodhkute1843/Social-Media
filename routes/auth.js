// const router = require("express").Router();
import express from "express";
const router = express.Router();

import User from "../models/User.js";
import bcrypt from "bcrypt";

router.get("/", (req, res) => {
  res.send("hey welcome to auth");
});

//Register
// router.get("/register", async (req, res) => {
//   const user = new User({
//     username: "Subodh",
//     email: "subodh@example.com",
//     password: "123456",
//   });

//   await user.save();
//   res.send("user created");
// });

router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // !user && res.status(404).json("user not found");
    if (!user) {
      return res.status(404).json("user not found");
    }

    const validPass = await bcrypt.compare(req.body.password, user.password);
    // !validPass && res.status(400).json("wrong password");
    if (!validPass) {
      return res.status(400).json("wrong password");
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
