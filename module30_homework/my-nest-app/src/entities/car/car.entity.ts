import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Car {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    photo: [];

    @Column()
    name: String;

    @Column()
    owner_id: Number;

    @Column()
    price1: Number;

    @Column()
    price2: Number;

    @Column()
    price3: Number;

    @Column()
    yearIssue: Number;

    @Column()
    bodyCar: String;

    @Column()
    engineVolume: String;

    @Column()
    enginePower: String;

    @Column()
    engineFuel: String;

    @Column()
    transmission: String;

    @Column()
    drive: String;

    @Column()
    mileage: Number;

    @Column()
    options: [];

    @Column()
    availability:String
}