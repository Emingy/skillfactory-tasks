import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    photo: { type: Array, required: true },
    name: { type: String, required: true },
    owner_id: { type: Number, required: true },
    price1: { type: Number, required: true },
    price2: { type: Number, required: true },
    price3: { type: Number, required: true },
    yearIssue: { type: Number, required: true },
    bodyCar: { type: String, required: true },
    engineVolume: { type: String, required: true },
    enginePower: { type: String, required: true },
    engineFuel: { type: String, required: true },
    transmission: { type: String, required: true },
    drive: { type: String, required: true },
    mileage: { type: Number, required: true },
    options: { type: Array, required: true },
    availability:{ type: String, required: true }
});