import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog/blog.entry';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'Sk747673',
      database: 'blog',
      // entities: [Blog],
      synchronize: true,
      autoLoadEntities: true,
    }),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
