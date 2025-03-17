const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'teacher'], required: true },
}, { timestamps: true });

const User = model("User", userSchema);

module.exports = User;
