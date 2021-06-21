import { Injectable } from "@nestjs/common";
import { Reserv } from "src/entities/reserv/reserv.entity";
import { ReservInterface } from "src/modules/reserv/reserv.interface";
import { getMongoRepository } from "typeorm";


@Injectable()
export class ReservRepository {
    async addReserv(reserv: ReservInterface){
        const repository = getMongoRepository(Reserv);
        return await repository.save(reserv);
    }
    async getReserv(where: {}){
        const repository = getMongoRepository(Reserv);
        return await repository.find(where);
    }
    async getAllReserv(){
        const repository = getMongoRepository(Reserv);
        return await repository.find();
    }
}