import { Module } from '@nestjs/common';
import { SchedulingsService } from './schedulings.service';
import { SchedulingsController } from './schedulings.controller';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SchedulingsController],
  providers: [SchedulingsService, PrismaService],
})
export class SchedulingsModule {}
