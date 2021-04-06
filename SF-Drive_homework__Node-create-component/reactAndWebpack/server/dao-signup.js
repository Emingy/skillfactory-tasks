const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    password: String
})
const url = 'mongodb+srv://dbUser:temp123@cluster0.3akyl.mongodb.net/SF-Drive';
const User = mongoose.model('Users', userSchema);
module.exports.signupDao = async function(data){
    const test = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(async ()=>{
            const newUser = await new User(data);
            const status = await newUser.save();
            if(status){
                return(`Code:200`);
            }else{
                return(`Code:400`);
            }
        })
        .catch((error)=> {
            return(`Code:${error.code}`)
        })
    return test
}