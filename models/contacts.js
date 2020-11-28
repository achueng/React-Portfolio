const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter your name"
    },
    email: {
      type: email,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
      required: "Enter your email"
    },
    message: {
      type: String,
      trim: true
    }
  }
);

const Contacts = mongoose.model("Contacts", contactsSchema);

module.exports = Contacts;
