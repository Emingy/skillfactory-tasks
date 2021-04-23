const mongoose = require('mongoose');
var User = require('./user_model.js');

const url = 'mongodb+srv://dbUser:temp123@cluster0.3akyl.mongodb.net/SF-Drive';

module.exports.recoveryDao = async function(data){
    const db = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(async ()=>{
            let user = await User.find({email: data.email})
            if (user) {
                if (user[0].password==data.password) {
                    let result = await User.update({'_id':user[0]._id},{password:data.newPassword})
                    mongoose.connection.close()
                    if(result){
                        return 200
                    }else{
                        return 400
                    }
                }else{
                    return 401
                }
            }else{
                return 400
            }
        })
        .catch((error)=> {
            return error.code;
        })
    return db
}