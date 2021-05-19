import { Injectable } from "@nestjs/common";
import { Car } from "src/entities/car/car.entity";
import { getMongoRepository } from "typeorm";


@Injectable()
export class CarRepository {
    async getOneCar(car: {}){
        const repository = getMongoRepository(Car);
        return await repository.findOne(car);
    }
    async getCars(where: {}){
        const repository = getMongoRepository(Car);
        return await repository.find(where);
    }
}