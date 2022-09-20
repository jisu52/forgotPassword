const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const bcryptSalt = process.env.BCRYPT_SALT;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
  },
  email: {
      type: String,
      required: true,
      unique: true,
  },
  password: {
      type: String,
      required: true,
  },
  first_name:{
      type: String,
      required: true,
  },
  last_name:{
      type: String,
      required: true,
  },
  middle_name:{
      type: String,
  },
  birthdate:{
      type: Date,
      required: true,
  },
  country: {
      type: String,
      required: true,
  },
  pincode: {
      type: String,
      required: true,
  },
  language: {
      type: String,
      required: true,
  },
  choices: {
      type: [String],
  },
  created_date:{
      type: Date,
    //   required: true,
  },
  updated_date: {
      type: Date,
    //   required: true,
  },
  profile_picture:{
      type: String,
  }
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const hash = await bcrypt.hash(this.password, Number(bcryptSalt));
  this.password = hash;
  next();
});

module.exports = mongoose.model("user", userSchema);