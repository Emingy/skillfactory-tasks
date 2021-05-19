import { Module } from '@nestjs/common';
import { UsersRepository } from 'src/repositories/users.repository';
import { JwtModule } from '../jwt/jwt.module';
import { SignInController } from './signin.controller';
import { SignInService } from './signin.service';

@Module({
  imports: [JwtModule],
  controllers: [SignInController],
  providers: [SignInService, UsersRepository],
})
export class SignInModule {}
