import { Module } from '@nestjs/common';
import { SignUpController } from './signup.controller';
import { SignUpService } from './signup.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '../jwt/jwt.module';
import { UserSchema } from '../mongoose/user.schema';
import { UsersRepository } from 'src/repositories/users.repository';

@Module({
  imports: [JwtModule],
  controllers: [SignUpController],
  providers: [SignUpService, UsersRepository],
})
export class SignUpModule {}
