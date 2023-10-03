import { Controller, Get, Post, Body } from '@nestjs/common';
import { MythologyService } from './mythology.service';
import { Mythology } from '@prisma/client';

@Controller('mythology')
export class MythologyController {
  constructor(private readonly mythologyService: MythologyService) {}

  @Get()
  async findAll(): Promise<Mythology[]> {
    return this.mythologyService.findAll();
  }

  @Post()
  async create( @Body() mythologyData: { codename: string }): Promise<Mythology> {
    const { codename } = mythologyData;
    return this.mythologyService.createMythology({
      code_name: codename,
    });
  }
}