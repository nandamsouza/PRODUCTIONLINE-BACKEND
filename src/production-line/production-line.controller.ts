import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductionLineService } from './production-line.service';
import { CreateProductionLineDto } from './dto/createProductionLine.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { validateBody } from 'src/utils/validate-body';

@ApiTags('Linha de Produção')
@Controller('production-lines')
export class ProductionLineController {
  constructor(private readonly productionLineService: ProductionLineService) {}

  @ApiOperation({ summary: 'Cria uma nova de linha de produção' })
  
  @Post()
  async create(@Body() createProductionLineDto: CreateProductionLineDto) {
   await validateBody(CreateProductionLineDto,Body)
    return this.productionLineService.create(createProductionLineDto);
  }

  @ApiOperation({ summary: 'Lista todas as linhas' })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.productionLineService.findAll();
  }

  @ApiOperation({ summary: 'Filtra uma linha especifica por id' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productionLineService.findOne(id);
  }

  @ApiOperation({ summary: 'Edita uma linha especifica por id' })
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductionLineDto: CreateProductionLineDto) {
    await validateBody(CreateProductionLineDto, Body)
    return this.productionLineService.update(id, updateProductionLineDto);
  }

  @ApiOperation({ summary: 'Deleta uma linha especifica por id' })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productionLineService.remove(id);
  }
}
