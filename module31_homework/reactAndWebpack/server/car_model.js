var mongoose = require('mongoose');

var carSchema = new mongoose.Schema({
    id: Number,
    photo: Array,
    name: String,
    owner_id: Number,
    price1: Number,
    price2: Number,
    price3: Number,
    yearIssue: Number,
    bodyCar: String,
    engineVolume: String,
    enginePower: String,
    engineFuel: String,
    transmission: String,
    drive: String,
    mileage: Number,
    options: Array,
    availability:String
}, {collection: 'Cars'});
module.exports = mongoose.model('Cars', carSchema);          