// const axios = require("axios");
const express = require("express");
const router = express.Router();
const Spell = require("../models/SpellsModel");
const Book = require("../models/BookModel");

let fs = require("fs");
const rawSpellData = fs.readFileSync("./localSpells.json", "utf-8");
const data = JSON.parse(rawSpellData);

// router.param("spell", function (req, res, next, id) {
//   // Once the database is loaded, I will need to use mongoose Query methods to access data.
//   const spellArray = Object.values(data.spells);
//   req.spells = spellArray;
//   req.spell = req.spells.find((spell) => spell.id === Number(id));
//   next();
// });

router.get("/", (req, res) => {
  res.send("Welcome to the Spell Channel!");
});

router.get("/generate-spell-data", async (req, res) => {
  // try {
  //   const response = await axios.get("https://api.potterdb.com/v1/spells");
  //   res.send(response.data);
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).send("Error retrieving data from API");
  // }
  // Test by creating in mongodb
  for (let i = 0; i < data.spells.length; i++) {
    let MagicalTheory = new Book({
      title: "Magical Theory",
      author: "Adalbert Waffling",
      bookAccess: "any",
      spellsContained: [],
      countryOfOrigin: "",
    });

    let lumos = new Spell({
      name: "Lumos",
      book: [],
      spellPower: 1,
    });

    MagicalTheory.spellsContained.push(lumos._id);
    lumos.book.push(MagicalTheory._id);

    lumos.save();
    MagicalTheory.save();
  }
  res.send("Generated");
});

router.get("/:spell", (req, res) => {
  // Once the database is loaded, I will need to use mongoose Query methods to access data.
  res.send(req.spell);
});

module.exports = router;
