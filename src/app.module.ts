import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { MythologyModule } from './mythology/mythology.module';

@Module({
  imports: [MythologyModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
