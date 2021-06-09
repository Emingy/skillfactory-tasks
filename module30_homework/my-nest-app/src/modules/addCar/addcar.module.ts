import { Module } from '@nestjs/common';
import { AddCarController } from './addcar.controller';
import { AddCarService } from './addcar.service';
import { AddCarsRepository } from 'src/repositories/addCar.repository';

@Module({
  controllers: [AddCarController],
  providers: [AddCarService, AddCarsRepository],
})
export class AddCarModule {}
