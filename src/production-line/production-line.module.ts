import { Module } from '@nestjs/common';
import { ProductionLineService } from './production-line.service';
import { ProductionLineController } from './production-line.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProductionLineService],
  controllers: [ProductionLineController],
})
export class ProductionLineModule {}
