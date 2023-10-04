import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { God, Prisma } from "@prisma/client";

@Injectable()
export class GodService {
    constructor(private prisma: PrismaService) {}

    async findAll(): Promise<God[]> {
        return this.prisma.god.findMany();
    }
}