import { UserService } from './user.service';
import { UserCOntroller } from './user.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [UserCOntroller],
  providers: [UserService],
})
export class UserModule {}
