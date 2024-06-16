import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select  :false
  },
});
UserSchema.methods.getJwtToken = function() {
  const secret = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRES_IN;

  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }

  if (!expiresIn) {
    throw new Error('JWT_EXPIRES_IN is not defined in environment variables');
  }

  // Generate and return JWT token
  const token = jwt.sign({ id: this._id }, secret, {
    expiresIn: expiresIn,
  });

  return token;
};
export default mongoose.model("User", UserSchema);
