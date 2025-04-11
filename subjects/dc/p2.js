// subjects/os/p2.js
const express = require("express");
const router = express.Router();

// GET /os/p2
router.get("/", (req, res) => {
  const codeString = `
  // Example OS P2 code
  console.log("Operating System: Process 2 code");
  `;
  res.json({ code: codeString });
});

module.exports = router;
