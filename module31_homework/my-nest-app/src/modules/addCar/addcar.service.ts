import { HttpException, Injectable, Inject, HttpStatus } from "@nestjs/common";
import { AddCar } from './addcar.interface';
import { Car as CarEntity } from "../../entities/addCar/addcar.entity";
import { AddCarsRepository } from "src/repositories/addCar.repository";

@Injectable()
export class AddCarService {
    constructor(
        private addcarsRepository: AddCarsRepository
    ) {}

    async AddCar(addcar: AddCar){
        const newCar = new CarEntity();
        newCar.brand = addcar.brand;
        newCar.model = addcar.model;
        newCar.yearIssue = addcar.yearIssue;
        newCar.governmentNumber = addcar.governmentNumber;
        newCar.vin = addcar.vin;
        newCar.color = addcar.color;
        newCar.drive = addcar.drive;
        newCar.Enginefuel = addcar.Enginefuel;
        newCar.Enginevolume = addcar.Enginevolume;
        newCar.Enginepower = addcar.Enginepower;
        newCar.transmission = addcar.transmission;
        newCar.mileage = addcar.mileage;
        newCar.VPSerialAndNumber = addcar.VPSerialAndNumber;
        newCar.VRCSerialAndNumber = addcar.VRCSerialAndNumber;
        newCar.PriceOne = addcar.PriceOne;
        newCar.PriceTwo = addcar.PriceTwo;
        newCar.PriceThree = addcar.PriceThree;
        newCar.Osago = addcar.Osago;
        newCar.Kasko = addcar.Kasko;
        newCar.Options = addcar.Options;
        newCar.AdditionalServices = addcar.AdditionalServices;
        newCar.photosAuto = addcar.photosAuto;
        newCar.photosDoc = addcar.photosDoc;

        const result = await this.addcarsRepository.AddCar(newCar);

        // const newUser = new this.userModel(addcar)
        // const result = await newUser.save();
        console.log(result);
        try{
            return {
                code: 200
            }
        } catch {
            throw new HttpException({
                "status": 400,
                "error": "This is a custom message"
            }, HttpStatus.BAD_REQUEST);
        }
    }
}