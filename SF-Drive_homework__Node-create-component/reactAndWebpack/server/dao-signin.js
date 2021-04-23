const mongoose = require('mongoose');
var User = require('./user_model.js');

const url = 'mongodb+srv://dbUser:temp123@cluster0.3akyl.mongodb.net/SF-Drive';

module.exports.signupDao = async function(data){
    const db = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(async ()=>{
            let user = await User.find({email: data.email})
            if (user) {
                mongoose.connection.close()
                if (user[0].password==data.password) {
                    let response = {
                        code: 200,
                        file: user[0].file,
                        name: user[0].name,
                        birthDate: user[0].birthDate,
                        planing: user[0].planing,
                        mobile: user[0].mobile
                    };
                    return response
                }
            }else{
                return {code:400}
            }
        })
        .catch((error)=> {
            return error.code;
        })
    return db
}