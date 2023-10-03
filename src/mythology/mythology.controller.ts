import { Controller, Get } from '@nestjs/common';
import { MythologyService } from './mythology.service';
import { Mythology } from '@prisma/client';

@Controller('mythology')
export class MythologyController {
  constructor(private readonly mythologyService: MythologyService) {}

  @Get()
  async findAll(): Promise<Mythology[]> {
    return this.mythologyService.findAll();
  }
}