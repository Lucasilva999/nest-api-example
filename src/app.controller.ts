import { Controller, Get, Header } from '@nestjs/common';
import { AppService, MinhaClasseTeste } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getOlaMundo();
  }
}

@Controller('teste')
export class AppTeste {
  constructor(private readonly minhaClasseTeste: MinhaClasseTeste) {}

  @Get()
  getTeste() : string {
    return this.minhaClasseTeste.getTeste();
  }

  @Get('1')
  @Header('Content-Type', 'text/html')
  getTeste1() : {name: string, age: Number } {
    return { name: 'Lucas', age: 19 };
  }
}
