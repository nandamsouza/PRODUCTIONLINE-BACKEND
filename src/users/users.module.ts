import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users.service';

@Module({
  imports:[PrismaModule],
  providers:[UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
