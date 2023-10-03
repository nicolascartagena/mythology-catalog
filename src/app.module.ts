import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { MythologyModule } from './mythology/mythology.module';
import { AreaModule } from './area/area.module';

@Module({
  imports: [MythologyModule, AreaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
