import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { UpdateSchedulingDto } from './dto/update-scheduling.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SchedulingsService {

  constructor(private prismaService: PrismaService) {}

  async create(createSchedulingDto: CreateSchedulingDto) {
    if(createSchedulingDto.startDateTime > createSchedulingDto.endDateTime) {
      throw new BadRequestException("A data de início deve ser anterior à data de término!");
    }

    const userFound = await this.prismaService.user.findUnique({
      where: {
        id: createSchedulingDto.userId
      }
    })

    if(!userFound) {
      throw new NotFoundException("Usuário inválido!")
    }

    return await this.prismaService.scheduling.create({
      data: createSchedulingDto
    });

  }

  async findAll() {
    return await this.prismaService.scheduling.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.scheduling.findUnique({
      where: { id }
    })
  }

  async update(id: number, updateSchedulingDto: UpdateSchedulingDto) {
    return await this.prismaService.scheduling.update({
      where: { id },
      data: updateSchedulingDto
    });
  }

  async remove(id: number) {
    return await this.prismaService.scheduling.delete({
      where: { id }
    });
  }
}
