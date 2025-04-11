// subjects/dc/p1.js
const express = require("express");
const router = express.Router();

// GET /dc/p1
router.get("/", (req, res) => {
  const codeString = `
  // Example DC P1 code
  console.log("Digital Circuits: Process 1 code");
  `;
  res.json({ code: codeString });
});

module.exports = router;
