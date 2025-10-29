import { Module } from '@nestjs/common';
import { SchedulingsService } from './schedulings.service';
import { SchedulingsController } from './schedulings.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [UsersService],
  controllers: [SchedulingsController],
  providers: [SchedulingsService],
})
export class SchedulingsModule {}
