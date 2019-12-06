const mongoose = require('mongoose');


// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         index: true
//     },
//     password: String,
//     confirmPassword: String,
// }, {
//     timestamps: true
// });
// userSchema.index({
//     name: 1
// })
// module.exports = mongoose.model("user", userSchema);

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    confirmPassword: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('user', userSchema)