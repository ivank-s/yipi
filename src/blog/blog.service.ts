import { Injectable } from '@nestjs/common';
import { Blog } from './blog.entry';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}
  findAll(): Promise<Blog[]> {
    return this.blogRepository.find();
  }
  async createOne(blog: Partial<Blog>): Promise<Blog> {
    const newBlog = await this.blogRepository.create(blog);
    await this.blogRepository.save(newBlog);
    console.log(newBlog, 'new');
    return newBlog;
  }
}
