import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkstationDto } from './dto/create-workstation.dto';

@Injectable()
export class WorkstationService {
  constructor(private prisma: PrismaService) {}

  async create(createWorkstationDto: CreateWorkstationDto) {
    await this.findLineById(createWorkstationDto.productionLineId);
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
    await this.findLineById(updateWorkstationDto.productionLineId)
    return this.prisma.workstation.update({
      where: { id },
      data: updateWorkstationDto,
    });
  }

  async remove(id: string) {
    return this.prisma.workstation.delete({ where: { id } });
  }

  async findLineById(productionLineId: string) {
    const existingProductionLine = await this.prisma.workstation.findFirst({
      where: {
        productionLineId,
      },
    });

    if (existingProductionLine) {
      throw new BadRequestException(
        `Esta linha de produção já está vinculada a outro posto.`
      );
    }
    return null; 
  }
}
