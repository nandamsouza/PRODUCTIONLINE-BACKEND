import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkstationDto } from './dto/create-workstation.dto';

@Injectable()
export class WorkstationService {
  constructor(private prisma: PrismaService) {}

  async create(createWorkstationDto: CreateWorkstationDto) {
    return this.prisma.workstation.create({
      data: createWorkstationDto,
    });
  }

  async findAll() {
    const listworkStation = await this.prisma.workstation.findMany({
      include: {
        productionLine: true,
      },
    });
    return listworkStation;
  }

  async findOne(id: string) {
    const workstation = await this.prisma.workstation.findUnique({
      where: { id },
    });
    if (!workstation) {
      throw new NotFoundException(`Workstation with ID ${id} not found`);
    }
    return workstation;
  }

  async update(id: string, updateWorkstationDto: CreateWorkstationDto) {
    return this.prisma.workstation.update({
      where: { id },
      data: updateWorkstationDto,
    });
  }

  async remove(id: string) {
    return this.prisma.workstation.delete({ where: { id } });
  }
}
