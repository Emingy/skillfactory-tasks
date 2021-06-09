var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    planing: String,
    name: String,
    birthDate: Date,
    email: String,
    mobile: Number,
    passportSerialNumber: Number,
    passportDateIssue: Date,
    passportIssuedBy: String,
    passportCode: Number,
    driveSerialNumber: Number,
    driveDateIssue: Date,
    password: String,
    file:Array
}, {collection: 'Users'});
module.exports = mongoose.model('Users', userSchema);          