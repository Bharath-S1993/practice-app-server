const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: { type: String, index: true },
    password: String,
    confirmPassword: String,
}, { timestamps: true });

module.exports = mongoose.model("user", userSchema);