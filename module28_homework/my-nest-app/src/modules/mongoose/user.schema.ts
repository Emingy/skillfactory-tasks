import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  planing: { type: String, required: true },
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  passportSerialNumber: { type: Number, required: true },
  passportDateIssue: { type: Date, required: true },
  passportIssuedBy: { type: String, required: true },
  passportCode: { type: Number, required: true },
  driveSerialNumber: { type: Number, required: true },
  driveDateIssue: { type: Date, required: true },
  password: { type: String, required: true },
  file: { type: Array, required: true },
});