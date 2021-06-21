import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarRepository } from 'src/repositories/car.repository';
import { JwtModule } from '../jwt/jwt.module';
import { CarSchema } from '../mongoose/car.schema';
import { SearchCarController } from './searchCar.controller';
import { SearchCarService } from './searchCar.service';

@Module({
  controllers: [SearchCarController],
  providers: [SearchCarService, CarRepository],
})
export class SearchCarModule {}
