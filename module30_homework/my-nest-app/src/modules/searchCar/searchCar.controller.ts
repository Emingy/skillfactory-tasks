import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { SearchCarService } from "./searchCar.service";
import { SearchCarInterface } from "./searchCar.interface"
@Controller('searchCar')
export class SearchCarController {
    constructor(private searchCarService: SearchCarService){}

    @Get()
    Car(@Query() params: SearchCarInterface){
        console.log('search car, ', params);
        return this.searchCarService.searchCar(params);
    }
}