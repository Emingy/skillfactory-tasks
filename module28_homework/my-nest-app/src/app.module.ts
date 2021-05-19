import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignInModule } from './modules/signIn/signin.module';
import { SignUpModule } from './modules/signup/signup.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModule } from './modules/car/car.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchCarModule } from './modules/searchCar/searchCar.module';

@Module({
  imports: [
    SignInModule,
    SignUpModule,
    CarModule,
    SearchCarModule,
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
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
