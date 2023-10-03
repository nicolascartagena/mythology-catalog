import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [AreaService, PrismaService],
  controllers: [AreaController]
})

export class AreaModule {}