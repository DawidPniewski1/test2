import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test2',
      entities: ['dist/**/**.entity{.ts,.js}'],
      migrations: ['src/migration/*{.ts,.js}'],
      cli: {
        migrationsDir: 'src/migration',
      },
      synchronize: false,

      //  autoLoadEntities: false,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
