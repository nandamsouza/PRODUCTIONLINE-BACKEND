import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';

@Module({

  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
