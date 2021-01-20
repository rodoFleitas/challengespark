const { Schema, model } = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
  password: {
    type: String,
    required: true,
  },
  document: {
    type: Number,
    required: true,
    unique: true,
  },
  dischargeDate: {
    type: String,
    default: () => {
      const date = new Date();
      const shortDate = date.toLocaleDateString("es");
      return shortDate;
    },
  },
  home: {
    type: String,
    required: true,
  },
  totalAccesses: [Map],
  admin: {
      type: Boolean,
      default: () => false
  }
});

userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("User", userSchema);
