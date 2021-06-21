import { HttpException, Injectable, HttpStatus } from "@nestjs/common";
import { getMongoManager, Like, ObjectID } from 'typeorm'
import { Car as CarEntity } from "../../entities/car/car.entity"
import { CarRepository } from 'src/repositories/car.repository';
import { SearchCarInterface } from "./searchCar.interface";
@Injectable()
export class SearchCarService {
    constructor(
        private carRepository: CarRepository
    ) {}

    async searchCar(filter){
        console.log(filter)
        let where = {}
        if(filter.price!="all"){
        where = Object.assign({"PriceOne": {'$regex': `${filter.price}`}})
        }
        if(filter.transmission!="all"){
        where = Object.assign({"transmission": {'$regex': `${filter.transmission}`}})
        }
        if(filter.drive!="all"){
        where = Object.assign({"drive": {'$regex': `${filter.drive}`}})
        }
        if(filter.engine!="all"){
        where = Object.assign({"Enginefuel": {'$regex': `${filter.engine}`}})      
        }
        console.log(where)
        console.log(await this.carRepository.getCars(where))
        return await this.carRepository.getCars(where);
        // const res = await this.carRepository.getCars(where);
        // console.log(res)
        // try{
        //     const response = {
        //         code: 200,
        //         data: res
        //     }
        //     return response
        // } catch {
        //     throw new HttpException({
        //         "status": 400,
        //         "error": "This is a custom message"
        //     }, HttpStatus.BAD_REQUEST);
        // }
    }
}