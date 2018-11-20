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
router.get("/Sheet/Get", (req, res) =>
  send(res.status(200), JSON.stringify(sheetData))
);

// Post Sheet data
router.post("/Sheet/Save", (req, res) => {
  const { row, col, text } = req.body;
  console.log(req.body)
  if (row && col && text) {
    const cellFactor = { b: 2, c: 1, d: 0 };
    const cellKey = row * 3 - cellFactor[col];
    sheetData.cells[cellKey] = {a: text}
    send(res.status(200), JSON.stringify(sheetData));
  } else {
    send(res.status(200), JSON.stringify(sheetData));
  }
});

module.exports = router;
