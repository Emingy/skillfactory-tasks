import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '../jwt/jwt.module';
import { UserSchema } from '../mongoose/user.schema';
import { SignInController } from './signin.controller';
import { SignInService } from './signin.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), JwtModule],
  controllers: [SignInController],
  providers: [SignInService],
})
export class SignInModule {}
