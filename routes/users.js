// const router = require("express").Router();
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hey welcome to users");
});

export default router;
