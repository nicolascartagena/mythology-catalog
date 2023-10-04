import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { MythologyModule } from './mythology/mythology.module';
import { AreaModule } from './area/area.module';
import { GodModule } from './god/god.module';
import { ValidationGodMiddleware } from './middlewares/validationGod.middleware';

@Module({
  imports: [MythologyModule, AreaModule, GodModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidationGodMiddleware)
      .forRoutes({path: 'god', method: RequestMethod.POST});
  }
}
