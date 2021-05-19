import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CarService } from "./car.service";

@Controller('car')
export class CarController {
    constructor(private carService: CarService){}

    @Get(':id')
    Car(@Param() params){
        console.log('Get car, ', params);
        return this.carService.getCar(params.id);
    }
}