const express = require("express");

const router = express.Router();

// Mock data
const sheetData = require("../mock/sheetData.json");

const serverResponseTime = 200;

/**
 * Api routes
 */

// Get Sheet data
router.get("/Sheet/Get", (req, res) => {
  res.status(200).send(JSON.stringify(sheetData));
});

// Post Sheet data
router.post("/Sheet/Save", (req, res) => {
  const { row, col, text } = req.body;
  if (row && col && text && !sheetData.cells[row]) {
    sheetData.cells[row] = { [col]: text };
    res.status(200).send(JSON.stringify(sheetData));
  } else {
    let line = sheetData.cells[row];
    line ? (line[col] = text) : null;
    res.status(200).send(JSON.stringify(sheetData));
  }
});

module.exports = router;
