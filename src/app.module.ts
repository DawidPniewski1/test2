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
      // migrationsTableName: 'migrations',
      migrations: ['src/migrations/*.ts'],
      // cli: {
      //   migrationsDir: 'src/migrations',
      // },
      synchronize: true,
      //  synchronize: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
