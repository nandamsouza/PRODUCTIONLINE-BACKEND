import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    methods: '*',
    optionsSuccessStatus: 200,
    exposedHeaders: '*',
  });
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Documentação')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.BACKEND_PORT || 8005, () => {
    console.log(
      `🤖 Server is running on port http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}`,
    );
    console.log(
      `🤖 Swagger running on port http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}/swagger`,
    );
  });
}
bootstrap();
