const mongoose = require('mongoose');
var Car = require('../car_model.js');

const url = 'mongodb+srv://dbUser:temp123@cluster0.3akyl.mongodb.net/SF-Drive';

module.exports.searchCarDao = async function(data){
    const db = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(async ()=>{
            let car = await Car.find(data)
            if (car) {
                mongoose.connection.close()
                let response = {
                    code: 200,
                    data: car
                };
                return response
            }else{
                return {code:400}
            }
        })
        .catch((error)=> {
            return error.code;
        })
    return db
}