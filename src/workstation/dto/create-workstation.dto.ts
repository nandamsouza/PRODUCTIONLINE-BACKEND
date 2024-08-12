import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { WorkstationType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkstationDto {
  @ApiProperty({
    description: 'name:string',
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'type: TEST | RECORDING',
    example: ' TEST | RECORDING',
  })
  @IsEnum(WorkstationType)
  type: WorkstationType;

  @ApiProperty({
    description: 'productionLineId: @id',
    example: 'id',
  })
  @IsString()
  @IsNotEmpty()
  productionLineId: string;
}
