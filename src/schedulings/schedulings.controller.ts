import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchedulingsService } from './schedulings.service';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { UpdateSchedulingDto } from './dto/update-scheduling.dto';

@Controller('schedulings')
export class SchedulingsController {
  constructor(private readonly schedulingsService: SchedulingsService) {}

  @Post()
  create(@Body() createSchedulingDto: CreateSchedulingDto) {
    return this.schedulingsService.create(createSchedulingDto);
  }

  @Get()
  findAll() {
    return this.schedulingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schedulingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchedulingDto: UpdateSchedulingDto) {
    return this.schedulingsService.update(+id, updateSchedulingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schedulingsService.remove(+id);
  }
}
