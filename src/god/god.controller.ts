import { Controller, Get, Post, Body } from "@nestjs/common/decorators";
import { GodService } from "./god.service";
import { God } from "@prisma/client";

@Controller("god")
export class GodController {
    constructor(private readonly godService: GodService) {}

    @Get()
    async findAll(): Promise<God[]> {
        return this.godService.findAll();
    }

    @Post()
    async create( @Body() godData: { codename: string, alias: string, mythology: number, area: number, power: number, description: string, image: string }): Promise<boolean> {
        console.log(godData);
        return true;
    }
}