import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    planing: String;

    @Column()
    name: String;

    @Column()
    birthDate: Date;

    @Column()
    email: String;

    @Column()
    mobile: Number;

    @Column()
    passportSerialNumber: Number;

    @Column()
    passportDateIssue: Date;

    @Column()
    passportIssuedBy: String;

    @Column()
    passportCode: Number;

    @Column()
    driveSerialNumber: Number;

    @Column()
    driveDateIssue: Date;

    @Column()
    password: String;

    @Column()
    file:[];
}