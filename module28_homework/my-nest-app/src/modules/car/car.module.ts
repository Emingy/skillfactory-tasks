import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarRepository } from 'src/repositories/car.repository';
import { JwtModule } from '../jwt/jwt.module';
import { CarSchema } from '../mongoose/car.schema';
import { CarController } from './car.controller';
import { CarService } from './car.service';

@Module({
  controllers: [CarController],
  providers: [CarService, CarRepository],
})
export class CarModule {}
