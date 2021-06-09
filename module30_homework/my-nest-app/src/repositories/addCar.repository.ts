import { Injectable } from "@nestjs/common";
import { addCar as Car } from "src/entities/addCar/addcar.entity";
import { AddCar } from "src/modules/addCar/addcar.interface";
import { getMongoRepository } from "typeorm";


@Injectable()
export class AddCarsRepository {
    async AddCar(addcar: AddCar){
        const repository = getMongoRepository(Car);
        return await repository.save(addcar);
    }
}