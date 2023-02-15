const Book = require("./BookModel");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spellSchema = new Schema({
  name: { type: String },
  book: [{ type: Schema.Types.ObjectId, ref: "Book" }],
  spellPower: { type: Number },
});

const Spell = mongoose.model("Spell", spellSchema);

module.exports = Spell;
