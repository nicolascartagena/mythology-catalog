import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Mythology, Prisma } from "@prisma/client";

@Injectable()
export class MythologyService {
    constructor(private prisma: PrismaService) {}

    async findAll(): Promise<Mythology[]> {
        return this.prisma.mythology.findMany();
    }
}