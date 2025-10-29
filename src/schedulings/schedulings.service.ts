import { Injectable } from '@nestjs/common';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { UpdateSchedulingDto } from './dto/update-scheduling.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SchedulingsService {

  constructor(private prismaService: PrismaService) {}

  async create(createSchedulingDto: CreateSchedulingDto) {
    if(createSchedulingDto.startDateTime > createSchedulingDto.endDateTime) {
      throw new Error("A data de inicio da atividade é maior que a final");
    }

    const userFound = await this.prismaService.user.findUnique({
      where: {
        id: createSchedulingDto.userId
      }
    })

    if(!userFound) {
      throw Error("Usuário inválido!")
    }

    return await this.prismaService.scheduling.create(createSchedulingDto);

  }

  findAll() {
    return `This action returns all schedulings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scheduling`;
  }

  update(id: number, updateSchedulingDto: UpdateSchedulingDto) {
    return `This action updates a #${id} scheduling`;
  }

  remove(id: number) {
    return `This action removes a #${id} scheduling`;
  }
}
