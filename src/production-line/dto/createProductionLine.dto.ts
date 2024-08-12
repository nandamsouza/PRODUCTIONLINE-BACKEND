import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ProductionLineType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductionLineDto {
    
    @ApiProperty({
        description: 'name: string',
        example: 'string',
      })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'type: PRODUCT | COMPONENT',
    example: ' PRODUCT | COMPONENT',
  })
  @IsEnum(ProductionLineType)
  type: ProductionLineType;
}
