const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Customer", customerSchema);
