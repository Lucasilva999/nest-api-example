import { Module } from '@nestjs/common';
import { AppController, AppTeste } from './app.controller';
import { AppService, MinhaClasseTeste } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ ProductsModule ],
  controllers: [AppController, AppTeste],
  providers: [AppService, MinhaClasseTeste],
})

export class AppModule {}
