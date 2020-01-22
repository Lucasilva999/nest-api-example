import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getOlaMundo(): string {
    return 'Olá Mundo!';
  }
}

export class MinhaClasseTeste {
  getTeste() : string {
    return 'Porra olha minha string cara, que daora!';
  }
}

