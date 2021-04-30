import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignInModule } from './modules/signIn/signin.module';
import { SignUpModule } from './modules/signup/signup.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    SignInModule,
    SignUpModule,
    MongooseModule.forRoot('mongodb+srv://dbUser:temp123@cluster0.3akyl.mongodb.net/SF-Drive?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
