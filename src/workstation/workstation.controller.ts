import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { WorkstationService } from './workstation.service';
import { CreateWorkstationDto } from './dto/create-workstation.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { validateBody } from 'src/utils/validate-body';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Estação de trabalho (Posto)')
@Controller('workstations')
export class WorkstationController {
  constructor(private readonly workstationService: WorkstationService) {}

  @ApiOperation({ summary: 'Cria uma nova estação de trabalho' })
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createWorkstationDto: CreateWorkstationDto) {
    await validateBody(CreateWorkstationDto, Body);
    return this.workstationService.create(createWorkstationDto);
  }

  @ApiOperation({ summary: 'Lista todas as estações de trabalho' })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.workstationService.findAll();
  }

  @ApiOperation({ summary: 'filtra uma estação de trabalho por id' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workstationService.findOne(id);
  }

  @ApiOperation({ summary: 'Edita uma estação de trabalho por id' })
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWorkstationDto: CreateWorkstationDto,
  ) {
    await validateBody(CreateWorkstationDto, Body);
    return this.workstationService.update(id, updateWorkstationDto);
  }

  @ApiOperation({ summary: 'Deleta uma estação de trabalho por id' })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workstationService.remove(id);
  }
}
