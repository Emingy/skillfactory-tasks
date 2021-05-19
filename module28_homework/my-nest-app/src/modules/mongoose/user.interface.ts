import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
    planing: String;
    name: String;
    birthDate: Date;
    email: String;
    mobile: Number;
    passportSerialNumber: Number;
    passportDateIssue: Date;
    passportIssuedBy: String;
    passportCode: Number;
    driveSerialNumber: Number;
    driveDateIssue: Date;
    password: String;
    file:[];
}