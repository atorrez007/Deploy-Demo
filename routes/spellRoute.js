const axios = require("axios");
const express = require("express");
const router = express.Router();
var spellData;
let fs = require("fs");
fs.readFile("./localSpells.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    spellData = JSON.parse(data);
  }
});

router.param("spell", function (req, res, next, id) {
  const spellArray = Object.values(spellData.spells);
  req.spells = spellArray;
  req.spell = req.spells.find((spell) => spell.id === Number(id));
  next();
});

router.get("/generate-spells", async (req, res) => {
  try {
    const response = await axios.get("https://api.potterdb.com/v1/spells");
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving data from API");
  }
});

router.get("/:spell", (req, res) => {
  res.send(req.spell);
});

module.exports = router;
