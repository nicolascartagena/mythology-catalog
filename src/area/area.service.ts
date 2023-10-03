import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Area, Prisma } from '@prisma/client';

@Injectable()
export class AreaService {
    constructor(private prisma: PrismaService) {}
    
    async findAll(): Promise<Area[]> {
        return this.prisma.area.findMany();
    }
    
    async createArea(data: Prisma.AreaCreateInput): Promise<Area> {
        return this.prisma.area.create({ data });
    }
}