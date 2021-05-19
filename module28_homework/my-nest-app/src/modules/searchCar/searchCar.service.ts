import { HttpException, Injectable, HttpStatus } from "@nestjs/common";
import { getMongoManager, ObjectID } from 'typeorm'
import { Car as CarEntity } from "../../entities/car/car.entity"
import { CarRepository } from 'src/repositories/car.repository';
import { SearchCarInterface } from "./searchCar.interface";
@Injectable()
export class SearchCarService {
    constructor(
        private carRepository: CarRepository
    ) {}

    async searchCar(filter: SearchCarInterface){
        let where = {}
        if(filter.price!="all"){
            where = Object.assign({price1: filter.price})
        }
        if(filter.transmission!="all"){
            where = Object.assign({transmission: filter.transmission})
        }
        if(filter.drive!="all"){
            where = Object.assign({drive: filter.drive})
        }
        if(filter.engine!="all"){
            where = Object.assign({engineFuel: filter.engine})      
        }
        const res = await this.carRepository.getCars(where);
        try{
            const response = {
                code: 200,
                data: res
            }
            return response
        } catch {
            throw new HttpException({
                "status": 400,
                "error": "This is a custom message"
            }, HttpStatus.BAD_REQUEST);
        }
    }
}