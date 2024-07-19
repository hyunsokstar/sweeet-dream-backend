import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 여러 주소를 포함하는 CORS 설정
  const allowedOrigins = ['http://127.0.0.1:3000', 'http://52.79.208.201:3000', 'https://dankkumi-hyunsok-ohs-projects.vercel.app'];

  app.enableCors({
    origin: allowedOrigins, // 여러 주소를 배열로 추가
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  });

  await app.listen(8080);


}
bootstrap();
