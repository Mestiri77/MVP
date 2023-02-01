const mongoose = require("mongoose");
const db = require("./index.js");

const teacherSchema = new mongoose.Schema({
  imageUrl: String,
  name: { type: String, unique: true },
  description: String,
  subjects : [String],
  levels : [String],
  cost : String,
  contact : { type: String, unique: true },
  comments : [String],
  messages : [String],
  rate : [Number],
});

const teacher = mongoose.model("teacher", teacherSchema);

module.exports = teacher;