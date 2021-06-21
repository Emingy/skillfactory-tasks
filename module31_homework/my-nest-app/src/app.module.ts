import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignInModule } from './modules/signIn/signin.module';
import { SignUpModule } from './modules/signup/signup.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModule } from './modules/car/car.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchCarModule } from './modules/searchCar/searchCar.module';
import { AddCarModule } from './modules/addCar/addcar.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CarResolver } from './car/car.resolver';
import { SearchCarService } from './modules/searchCar/searchCar.service';
import { CarRepository } from './repositories/car.repository';
import { ReservResolver } from './reserv/reserv.resolver';
import { ReservService } from './modules/reserv/reserv.service';
import { ReservRepository } from './repositories/reserv.repository';

@Module({
  imports: [
    SignInModule,
    SignUpModule,
    CarModule,
    // SearchCarModule,
    AddCarModule,
    // MongooseModule.forRoot('mongodb+srv://dbUser:temp123@cluster0.3akyl.mongodb.net/SF-Drive?retryWrites=true&w=majority'),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: "SF-Drive",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [
        `${__dirname}/**/*.entity.{ts,js}`,
      ]
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), '/src/graphql.ts'),
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService, CarResolver, SearchCarService, CarRepository, ReservResolver, ReservService, ReservRepository],
})
export class AppModule {}
