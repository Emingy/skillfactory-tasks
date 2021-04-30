import { Module } from '@nestjs/common';
import { SignUpController } from './signup.controller';
import { SignUpService } from './signup.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '../jwt/jwt.module';
import { UserSchema } from '../mongoose/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), JwtModule],
  controllers: [SignUpController],
  providers: [SignUpService],
})
export class SignUpModule {}
