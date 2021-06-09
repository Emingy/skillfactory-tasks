import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class addCar {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    brand: String;
    @Column()
    model: String;
    @Column()
    yearIssue: Number;
    @Column()
    governmentNumber: String;
    @Column()
    vin: String;
    @Column()
    color: String;
    @Column()
    Enginefuel: String;
    @Column()
    Enginevolume: String;
    @Column()
    Enginepower: String;
    @Column()
    transmission: String;
    @Column()
    mileage: String;
    @Column()
    VPSerialAndNumber: String;
    @Column()
    VRCSerialAndNumber: String;
    @Column()
    PriceOne: String;
    @Column()
    PriceTwo: String;
    @Column()
    PriceThree: String;
    @Column()
    Osago: String;
    @Column()
    Kasko: String;
    @Column()
    Options: [];
    @Column()
    AdditionalServices: [];
    @Column()
    photosAuto: [];
    @Column()
    photosDoc: [];
}