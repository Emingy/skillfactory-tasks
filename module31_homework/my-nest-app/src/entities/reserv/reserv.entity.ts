import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

import { Reserv as ReservAbstract } from "../../graphql";
 
@Entity()
export class Reserv implements ReservAbstract {
    @ObjectIdColumn()
    id: string;

    @Column()
    id_user: string;
    @Column()
    id_car: string;
    @Column()
    dates: string;
}