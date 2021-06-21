import { HttpException, Injectable, HttpStatus } from "@nestjs/common";
import { getMongoManager } from 'typeorm'
import { ObjectID } from 'mongodb'
import { Car as CarEntity } from "../../entities/car/car.entity"
import { CarRepository } from '../../repositories/car.repository';
@Injectable()
export class CarService {
    constructor(
        private carRepository: CarRepository
    ) {}

    async getCar(id: string){
        const res = await this.carRepository.getOneCar({_id: new ObjectID(id)});
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