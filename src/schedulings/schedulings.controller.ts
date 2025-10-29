import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SchedulingsService } from './schedulings.service';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { UpdateSchedulingDto } from './dto/update-scheduling.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('schedulings')
export class SchedulingsController {
  constructor(private readonly schedulingsService: SchedulingsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createSchedulingDto: CreateSchedulingDto) {
    return this.schedulingsService.create(createSchedulingDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.schedulingsService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.schedulingsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateSchedulingDto: UpdateSchedulingDto) {
    return this.schedulingsService.update(+id, updateSchedulingDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.schedulingsService.remove(+id);
  }
}
