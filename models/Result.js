// Importing mongoose library
const mongoose = require("mongoose");

// Creating Result model
const ResultModel = new mongoose.Schema({ result: { type: Object } });

// Exporting result model
module.exports = mongoose.model("Result", ResultModel, "Results");
