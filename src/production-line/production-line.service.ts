import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductionLineDto } from './dto/createProductionLine.dto';

@Injectable()
export class ProductionLineService {
  constructor(private prisma: PrismaService) {}

  async create(createProductionLineDto: CreateProductionLineDto) {
    return this.prisma.productionLine.create({
      data: createProductionLineDto,
    });
  }

  async findAll() {
    return this.prisma.productionLine.findMany();
  }

  async findOne(id: string) {
    const line = await this.prisma.productionLine.findUnique({ where: { id } });
    if (!line) {
      throw new NotFoundException(`Production Line with ID ${id} not found`);
    }
    return line;
  }

  async update(id: string, updateProductionLineDto: CreateProductionLineDto) {
    return this.prisma.productionLine.update({
      where: { id },
      data: updateProductionLineDto,
    });
  }

  async remove(id: string) {
    await this.findWorkStationById(id);
    return this.prisma.productionLine.delete({ where: { id } });
  }

  async findWorkStationById(productionLineId: string) {
    const existingWorkstation = await this.prisma.workstation.findFirst({
      where: {
        productionLineId,
      },
    });

    if (existingWorkstation) {
      throw new BadRequestException(
        `A linha de produção está vinculada a uma estação de trabalho e não pode ser removida.`,
      );
    }

    return null;
  }
}
