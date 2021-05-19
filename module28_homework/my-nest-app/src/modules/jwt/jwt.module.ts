import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';

@Module({
  exports: [JwtService],
  controllers: [],
  providers: [JwtService],
})
export class JwtModule {}