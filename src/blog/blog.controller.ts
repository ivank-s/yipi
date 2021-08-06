import {
  Controller,
  Get,
  Post,
  Query,
  Res,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { Response } from 'express';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  /*  @Get()
  findAll(): any {
    return this.blogService.findAll();
  }*/
  @Get()
  @HttpCode(HttpStatus.OK)
  async createOne(
    @Query() { blog },
    @Res({ passthrough: true }) res: Response,
  ) {
    const newBlog = await this.blogService.createOne({ content: blog });
    return newBlog;
  }
}
