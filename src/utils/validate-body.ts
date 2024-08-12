import { BadRequestException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

export async function validateBody<T extends object>(dto: new () => T, body: any): Promise<void> {
  const dtoInstance = plainToClass(dto, body);
  const errors: ValidationError[] = await validate(dtoInstance);

  if (errors.length > 0) {
    const messages = errors.map((err) => 
      Object.values(err.constraints || {}).join(', ')
    ).join('; ');

    throw new BadRequestException(`Validation failed: ${messages}`);
  }
}
