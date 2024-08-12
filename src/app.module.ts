import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module'; 
import { UsersModule } from './users/users.module';
import { ProductionLineModule } from './production-line/production-line.module';
import { WorkstationModule } from './workstation/workstation.module';
@Module({
  imports: [
    ConfigModule.forRoot(), 
    AuthModule,
    PrismaModule,
    UsersModule,
    ProductionLineModule,
    WorkstationModule
  ],
})
export class AppModule {}
