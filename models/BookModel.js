const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Spell = require("./SpellsModel");

const bookSchema = new Schema({
  title: { type: String },
  author: { type: String },
  bookAccess: { type: String },
  countryOfOrigin: { type: String },
  spellsContained: [{ type: Schema.Types.ObjectId, ref: "Spell" }],
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
