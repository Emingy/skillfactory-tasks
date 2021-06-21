import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

import { Car as CarAbstract } from "../../graphql";
 
@Entity()
export class Car implements CarAbstract {
    @ObjectIdColumn()
    id: string;

    @Column()
    brand: string;
    @Column()
    model: string;
    @Column()
    yearIssue: number;
    @Column()
    governmentNumber: string;
    @Column()
    vin: string;
    @Column()
    color: string;
    @Column()
    drive: string;
    @Column()
    Enginefuel: string;
    @Column()
    Enginevolume: string;
    @Column()
    Enginepower: string;
    @Column()
    transmission: string;
    @Column()
    mileage: string;
    @Column()
    VPSerialAndNumber: string;
    @Column()
    VRCSerialAndNumber: string;
    @Column()
    PriceOne: string;
    @Column()
    PriceTwo: string;
    @Column()
    PriceThree: string;
    @Column()
    Osago: string;
    @Column()
    Kasko: string;
    @Column()
    Options: [];
    @Column()
    AdditionalServices: [];
    @Column()
    photosAuto: [];
    @Column()
    photosDoc: [];
}