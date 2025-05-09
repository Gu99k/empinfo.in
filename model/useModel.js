const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contacts: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("mycrudData", userSchema);
module.exports = userModel;
