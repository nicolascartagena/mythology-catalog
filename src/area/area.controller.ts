import { Controller, Get, Post, Body } from '@nestjs/common';
import { AreaService } from './area.service';
import { Area } from '@prisma/client';

@Controller('area')
export class AreaController {
    constructor(private readonly areaService: AreaService) {}
    
    @Get()
    async findAll(): Promise<Area[]> {
        return this.areaService.findAll();
    }

    @Post()
    async create( @Body() areaData: {codename: string}): Promise<Area> {
        const { codename } = areaData;
        return this.areaService.createArea({
            code_name: codename,
        });
    }
}