const express = require("express");

const router = express.Router();

// Mock data
const sheetData = require("../mock/sheetData.json");

const serverResponseTime = 200;

// Simulate server delayed response
function send(res, data) {
  setTimeout(() => {
    res.send(data);
  }, serverResponseTime);
}

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
  if (row && col && text) {
    sheetData.cells[row] = { [col]: text };
    res.status(200).send(JSON.stringify(sheetData));
  } else {
    res.status(200).send(JSON.stringify(sheetData));
  }
});

module.exports = router;
