const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please Add a First Name"],
    },

    lastName: {
      type: String,
      required: [true, "Please Add a Last Name"],
    },

    email: {
      type: String,
      required: [true, "Please Add An Email"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please Add A valid Email",
      ],
    },

    role: {
      type: String,
      enum: ["admin", "customer"],
    },

    password: {
      type: String,
      required: [true, "Please add a Password"],
      minlength: 6,
      select: false,
    },

    phone: {
      type: Number,
      required: [true, "Please Add Your Phone Number"],
    },

    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("User", UserSchema);
