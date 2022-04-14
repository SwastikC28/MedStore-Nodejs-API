const mongoose = require("mongoose");

const MedicineSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  expiry: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Medicine", MedicineSchema);
