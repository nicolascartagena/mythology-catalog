import { Module } from '@nestjs/common';
import { MythologyService } from './mythology.service';
import { MythologyController } from './mythology.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [MythologyService, PrismaService],
  controllers: [MythologyController]
})

export class MythologyModule {}