import { Module } from "@nestjs/common";
import { GodService } from "./god.service";
import { GodController } from "./god.controller";
import { PrismaService } from "../prisma.service";

@Module({
    providers: [GodService, PrismaService],
    controllers: [GodController]
})

export class GodModule {}