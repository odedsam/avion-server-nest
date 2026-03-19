import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from '../products/products.module'; // Adjust the import path if needed
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';

export namespace ConfigUtil {
  export class Origin {
    static getOriginUrl(configService: ConfigService): string | undefined {
      return configService.get<string>('ORIGIN_URI');
    }
  }

  export class Swagger {
    static config = new DocumentBuilder()
      .setTitle('API Documentation')
      .setDescription('Avion Description API')
      .setVersion('1.0');

    static init(app: INestApplication<any>): void {
      const document = SwaggerModule.createDocument(app, Swagger.config.build());
      SwaggerModule.setup('api', app, document);
    }
  }

  export class Mongoose {
    static mongooseModule = MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    });
  }

  export class AppModule {
    static imports = [
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      Mongoose.mongooseModule,
      ProductsModule,
      AuthModule,
      UserModule
    ];
  }
}

const configuredOrigins = (process.env.FRONTEND_ORIGINS ?? process.env.FRONTEND_ORIGIN ?? '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowedOrigins = Array.from(
  new Set([
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'https://avion-im4t17rvd-fragged-ups-projects.vercel.app/',
    'https://avion-steel.vercel.app',
    'https://avion-2ihmcp5yj-fragged-ups-projects.vercel.app/',
    ...configuredOrigins,
  ])
);

export const corsOptions = {
  origin: allowedOrigins,
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  optionsSuccessStatus: 204,
}
