const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

// Create a Schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    default: "AnonymousUser@gmail.com"
  },
  password: {
    type: String,
    required: false
  },
  isHuman: {
    type: Boolean,
    default: true
  },
  galleries: [
    {
      type: Schema.Types.ObjectId,
      ref: "gallery"
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment"
    }
  ]
});
//
// userSchema.pre("save", async function(next) {
//   try {
//     // Generate a salt
//     const salt = await bcrypt.genSalt(10);
//     // Generate a password hash (salt + hash)
//     const passwordHash = await bcrypt.hash(this.password, salt);
//     // Re-assign hashed password over original password
//     this.password = passwordHash;
//     next();
//   } catch (error) {
//     next(error);
//   }
// });
//
// userSchema.methods.isValidPassword = async function(newPassword) {
//   try {
//     return await bcrypt.compare(newPassword, this.password);
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// Create a model
const User = mongoose.model("user", userSchema);

// Export the model
module.exports = User;
