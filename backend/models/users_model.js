import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//user schema that will be use as strcuture for all users
const userSchema = mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        password_repeat: { type: String, required: true },
        role: { type: String, enum: ['user', 'admin'], default: 'user' },
        aboutMe: { type: String },
        classOf: { type: Number },
    },
    {
        timetamps:true,
    }
);

// Method to hash password before saving to the database
userSchema.pre("save", async function (next) {
    const user = this;
  
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  
    next();
  });

  // Method to hash password before saving to the database
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password_repeat")) {
    user.password_repeat = await bcrypt.hash(user.password_repeat, 10);
  }

  next();
});

  // Compare user's input password with the hashed password in the database
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

  // Method to generate authentication token
  userSchema.methods.generateAuthToken = function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, "your_secret_key");
    return token;
  };

//Event model that will be use to create all users
export const User = mongoose.model("User", userSchema);