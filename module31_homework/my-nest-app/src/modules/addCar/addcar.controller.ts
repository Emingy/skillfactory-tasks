import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AddCarService } from "./addcar.service";
import { AddCar } from './addcar.interface';

@Controller('addcar')
export class AddCarController {
    constructor(private addCarService: AddCarService){}

    @Post()
    AddCar(@Body() addcar: AddCar){
        console.log('add car, ', addcar);
        return this.addCarService.AddCar(addcar);
    }
}