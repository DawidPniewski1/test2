import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(Config.appPort);
  console.log('Listening at', Config.appPort);
}
bootstrap();
