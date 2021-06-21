import { HttpException, Injectable, HttpStatus } from "@nestjs/common";
import { getMongoManager, Like, ObjectID } from 'typeorm'
import { Reserv as ReservEntity } from "../../entities/reserv/reserv.entity"
import { ReservInterface } from "./reserv.interface";
import { ReservRepository } from "src/repositories/reserv.repository";
@Injectable()
export class ReservService {
    constructor(
        private reservRepository: ReservRepository
    ) {}

    async addReserv(reserv: ReservInterface) {
        console.log( reserv )
        const newReserv = new ReservEntity();
        newReserv.id_user = reserv.id_user;
        newReserv.id_car = reserv.id_car;
        newReserv.dates = reserv.dates;

        return await this.reservRepository.addReserv(newReserv);
    }
    async getReserv(id:string){
        console.log(id);
        return await this.reservRepository.getReserv({"id_user": `${id}`})
    }
    // async searchCar(filter){
    //     console.log(filter)
    //     let where = {}
    //     if(filter.price!="all"){
    //     where = Object.assign({"PriceOne": {'$regex': `${filter.price}`}})
    //     }
    //     if(filter.transmission!="all"){
    //     where = Object.assign({"transmission": {'$regex': `${filter.transmission}`}})
    //     }
    //     if(filter.drive!="all"){
    //     where = Object.assign({"drive": {'$regex': `${filter.drive}`}})
    //     }
    //     if(filter.engine!="all"){
    //     where = Object.assign({"Enginefuel": {'$regex': `${filter.engine}`}})      
    //     }
    //     console.log(where)
    //     console.log(await this.carRepository.getCars(where))
    //     return await this.carRepository.getCars(where);
    // }
}